import { Inject, Injectable } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { FuncionesHelper } from '../../../comun/auxiliares';
import {
  ListaPaginadaDto,
  RespuestaDto,
  RespuestaObjetoDto,
  TipoRespuesta,
} from '../../../comun/transferencia';

import {
  IRepositorioFactory,
  REPOSITORIO_FACTORY,
} from '../../dominio/contratos/infraestructura/persistencia';
import {
  CUENTA_SERVICIO,
  ICuentaServicio,
} from '../../dominio/contratos/aplicacion/servicios';
import { Cuenta, Rol, RolCuenta, Usuario } from '../../dominio/entidades';
import { CuentaFiltro } from '../../dominio/entidades/filtros';
import {
  AutenticacionDto,
  CuentaCreacionDto,
  CuentaDto,
  CuentaModificacionDto,
  UsuarioCreacionDto,
  UsuarioModificacionDto,
} from '../../dominio/transferencia';
import {
  CuentaFiltroDto,
  UsuarioFiltroDto,
} from '../../dominio/transferencia/filtros';

@Injectable()
export class CuentaService implements ICuentaServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
    private jwtService: JwtService,
  ) {}

  async buscar(
    filtroDto: CuentaFiltroDto,
    pagina: number,
    cantidad: number,
  ): Promise<ListaPaginadaDto<CuentaDto>> {
    const respuesta =
      await this.repositorioFactory.cuentaRepositorio.obtenerPor(
        this.mapper.map(filtroDto, CuentaFiltroDto, CuentaFiltro),
        pagina,
        cantidad,
      );
    return new ListaPaginadaDto<CuentaDto>(
      this.mapper.mapArray(respuesta.lista, Cuenta, CuentaDto),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<CuentaDto> {
    const objeto = await this.repositorioFactory.cuentaRepositorio.obtenerPorId(
      id,
    );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Cuenta, CuentaDto);
  }

  async guardar(
    objetoDto: CuentaCreacionDto,
    usuarioDto: UsuarioCreacionDto = null,
  ): Promise<RespuestaObjetoDto<CuentaDto>> {
    const cuentaBD =
      await this.repositorioFactory.cuentaRepositorio.obtenerPorNombre(
        objetoDto.nombre,
      );
    if (cuentaBD) {
      return new RespuestaObjetoDto(
        TipoRespuesta.Error,
        'La cuenta ya existe.',
        null,
      );
    }

    if (usuarioDto && usuarioDto.correoElectronico) {
      const usuarioBD =
        await this.repositorioFactory.usuarioRepositorio.obtenerObjetoPor({
          correoElectronico: usuarioDto.correoElectronico,
        } as UsuarioFiltroDto);
      if (usuarioBD) {
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El correo electrónico ya esta en uso en otra cuenta.',
          null,
        );
      }
    }

    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(objetoDto, CuentaCreacionDto, Cuenta);
      // TODO: parametrizar las caracteristicas que debe cumplir una contraseña
      objeto.codigo = await FuncionesHelper.obtenerCadenaAleatoria(10);
      if (objeto.modoAutenticacion === 'BASE DE DATOS') {
        objeto.clave = await bcrypt.genSalt();
        objeto.contrasenia = await bcrypt.hash(
          objeto.contrasenia,
          objeto.clave,
        );
      } else {
        objeto.clave = '';
        objeto.contrasenia = '';
      }
      objeto.estaAutorizada = true;
      objeto.instUltSesion = null;
      objeto.numIntFallidos = 0;
      objeto.estaBloqueada = false;
      objeto.instUltBloqueo = null;
      const id = await this.repositorioFactory.cuentaRepositorio.guardar(
        objeto,
        transaccion,
      );
      if (id === 0) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no se ha podido guardar.',
          null,
        );
      }

      if (usuarioDto) {
        const usuario = this.mapper.map(
          usuarioDto,
          UsuarioCreacionDto,
          Usuario,
        );
        usuario.id = id;
        usuario.nombre = usuario.nombre || '';
        usuario.apellido = usuario.apellido || '';
        const usuarioId =
          await this.repositorioFactory.usuarioRepositorio.guardar(
            usuario,
            transaccion,
          );
        if (usuarioId === 0) {
          await this.repositorioFactory.revertir(transaccion);
          return new RespuestaObjetoDto(
            TipoRespuesta.Error,
            'El registro no se ha podido guardar.',
            null,
          );
        }
      }

      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, Cuenta, CuentaDto),
      );
    } catch (error) {
      await this.repositorioFactory.revertir(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Excepcion,
        error.toString(),
        null,
      );
    } finally {
      await this.repositorioFactory.liberar(transaccion);
    }
  }

  async modificar(
    id: number,
    objetoDto: CuentaModificacionDto,
    usuarioDto: UsuarioModificacionDto = null,
  ): Promise<RespuestaObjetoDto<CuentaDto>> {
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(objetoDto, CuentaModificacionDto, Cuenta);
      // TODO: parametrizar las caracteristicas que debe cumplir una contraseña
      delete objeto.codigo;
      let operacion = await this.repositorioFactory.cuentaRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      if (!operacion) {
        await this.repositorioFactory.liberar(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no se ha podido modificar.',
          null,
        );
      }
      if (usuarioDto) {
        const usuario = this.mapper.map(
          usuarioDto,
          UsuarioModificacionDto,
          Usuario,
        );
        operacion = await this.repositorioFactory.usuarioRepositorio.modificar(
          id,
          usuario,
          transaccion,
        );
        if (!operacion) {
          await this.repositorioFactory.revertir(transaccion);
          return new RespuestaObjetoDto(
            TipoRespuesta.Error,
            'El registro no se ha podido modificar.',
            null,
          );
        }
      }

      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, Cuenta, CuentaDto),
      );
    } catch (error) {
      await this.repositorioFactory.revertir(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Excepcion,
        error.toString(),
        null,
      );
    } finally {
      await this.repositorioFactory.liberar(transaccion);
    }
  }

  async eliminar(id: number): Promise<RespuestaDto> {
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      let operacion = await this.repositorioFactory.cuentaRepositorio.eliminar(
        id,
        transaccion,
        false,
      );
      if (!operacion) {
        await this.repositorioFactory.liberar(transaccion);
        return new RespuestaDto(
          TipoRespuesta.Error,
          'El registro no se ha podido eliminar.',
        );
      }
      operacion = await this.repositorioFactory.usuarioRepositorio.eliminar(
        id,
        transaccion,
        false,
      );
      if (!operacion) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaDto(
          TipoRespuesta.Error,
          'El registro no se ha podido eliminar.',
        );
      }
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaDto(
        TipoRespuesta.Exito,
        'El registro se ha eliminado con éxito.',
      );
    } catch (error) {
      await this.repositorioFactory.revertir(transaccion);
      return new RespuestaDto(TipoRespuesta.Excepcion, error.toString());
    } finally {
      await this.repositorioFactory.liberar(transaccion);
    }
  }

  async validar(cuenta: string, contrasenia: string): Promise<Cuenta> {
    const cuentaBD: Cuenta =
      await this.repositorioFactory.cuentaRepositorio.validar(
        cuenta,
        contrasenia,
      );
    if (cuentaBD) {
      return cuentaBD;
    } else {
      this.establecerIntentoFallido(cuenta);
      return null;
    }
  }

  async establecerIntentoFallido(cuenta: string): Promise<void> {
    const cuentaBD: Cuenta =
      await this.repositorioFactory.cuentaRepositorio.obtenerPorNombre(cuenta);
    if (cuentaBD && cuentaBD.estaAutorizada && !cuentaBD.estaBloqueada) {
      cuentaBD.numIntFallidos = cuentaBD.numIntFallidos + 1;
      if (cuentaBD.numIntFallidos >= 3) {
        cuentaBD.estaBloqueada = true;
        cuentaBD.instUltBloqueo = new Date();
      }
      await this.modificar(cuentaBD.id, cuentaBD);
    }
  }

  async cambiarContrasenia(
    codCuenta: string,
    contraseniaActual: string,
    contraseniaNueva: string,
  ): Promise<RespuestaObjetoDto<CuentaDto>> {
    const filtro = new CuentaFiltroDto();
    filtro.codigo = codCuenta;
    let cuentaBD =
      await this.repositorioFactory.cuentaRepositorio.obtenerObjetoPor(filtro);
    if (!cuentaBD) {
      return new RespuestaObjetoDto(
        TipoRespuesta.Error,
        'El registro no se ha podido modificar.',
        null,
      );
    }
    const nombre = cuentaBD.nombre;
    cuentaBD = await this.repositorioFactory.cuentaRepositorio.validar(
      nombre,
      contraseniaActual,
    );
    if (!cuentaBD) {
      return new RespuestaObjetoDto(
        TipoRespuesta.Error,
        'El registro no se ha podido modificar.',
        null,
      );
    }
    // TODO: parametrizar las caracteristicas que debe cumplir una contraseña
    if (contraseniaNueva.length < 8) {
      return new RespuestaObjetoDto(
        TipoRespuesta.Error,
        'La contraseña debe tener una longitud de 8 caracteres como mínimo.',
        null,
      );
    }
    cuentaBD.clave = await bcrypt.genSalt();
    cuentaBD.contrasenia = await bcrypt.hash(contraseniaNueva, cuentaBD.clave);
    return await this.modificar(cuentaBD.id, cuentaBD);
  }

  async restablecerContrasenia(
    id: number,
    contrasenia: string,
  ): Promise<RespuestaObjetoDto<CuentaDto>> {
    const cuentaBD: Cuenta =
      await this.repositorioFactory.cuentaRepositorio.obtenerPorId(id);
    if (!cuentaBD) {
      return new RespuestaObjetoDto(
        TipoRespuesta.Error,
        'El registro no se ha podido modificar.',
        null,
      );
    }
    // TODO: parametrizar las caracteristicas que debe cumplir una contraseña
    if (contrasenia.length < 8) {
      return new RespuestaObjetoDto(
        TipoRespuesta.Error,
        'La contraseña debe tener una longitud de 8 caracteres como mínimo.',
        null,
      );
    }
    cuentaBD.clave = await bcrypt.genSalt();
    cuentaBD.contrasenia = await bcrypt.hash(contrasenia, cuentaBD.clave);
    return await this.modificar(cuentaBD.id, cuentaBD);
  }

  async desbloquear(id: number): Promise<RespuestaObjetoDto<CuentaDto>> {
    const cuentaBD: Cuenta =
      await this.repositorioFactory.cuentaRepositorio.obtenerPorId(id);
    if (cuentaBD === null || !cuentaBD.estaBloqueada) {
      return new RespuestaObjetoDto(
        TipoRespuesta.Error,
        'El registro no se ha podido modificar.',
        null,
      );
    }
    cuentaBD.estaBloqueada = false;
    cuentaBD.numIntFallidos = 0;
    // cuentaBD.instUltBloqueo = null;
    return await this.modificar(cuentaBD.id, cuentaBD);
  }

  async autorizar(id: number): Promise<RespuestaObjetoDto<CuentaDto>> {
    const cuentaBD: Cuenta =
      await this.repositorioFactory.cuentaRepositorio.obtenerPorId(id);
    if (cuentaBD === null || cuentaBD.estaAutorizada) {
      return new RespuestaObjetoDto(
        TipoRespuesta.Error,
        'El registro no se ha podido modificar.',
        null,
      );
    }
    cuentaBD.estaAutorizada = true;
    return await this.modificar(cuentaBD.id, cuentaBD);
  }

  async desautorizar(id: number): Promise<RespuestaObjetoDto<CuentaDto>> {
    const cuentaBD: Cuenta =
      await this.repositorioFactory.cuentaRepositorio.obtenerPorId(id);
    if (cuentaBD === null || !cuentaBD.estaAutorizada) {
      return new RespuestaObjetoDto(
        TipoRespuesta.Error,
        'El registro no se ha podido modificar.',
        null,
      );
    }
    cuentaBD.estaAutorizada = false;
    return await this.modificar(cuentaBD.id, cuentaBD);
  }

  async obtenerToken(objetoDto: AutenticacionDto): Promise<any> {
    const cuentaBD: Cuenta =
      await this.repositorioFactory.cuentaRepositorio.validar(
        objetoDto.cuenta,
        objetoDto.contrasenia,
      );
    if (cuentaBD) {
      const usuarioBD: Usuario =
        await this.repositorioFactory.usuarioRepositorio.obtenerPorId(
          cuentaBD.id,
        );
      // const listaRolCuentaBD: RolCuenta[] =
      //   await this.repositorioFactory.rolCuentaRepositorio.obtenerPorGrupo(
      //     objetoDto.grupos,
      //     cuentaBD.id,
      //   );
      // if (listaRolCuentaBD.length === 0) {
      //   return await {
      //     access_token: null,
      //   };
      // }
      const payload = {
        user_id: cuentaBD.codigo,
        name: usuarioBD ? usuarioBD.nomPublico : '',
        given_name: usuarioBD ? usuarioBD.nombre : '',
        family_name: usuarioBD ? usuarioBD.apellido : '',
        nickname: cuentaBD.nombre,
        picture: null,
        email: usuarioBD ? usuarioBD.correoElectronico : '',
        nonce: '',
        auth: 'DB',
        // roles: listaRolCuentaBD.map((rolCuenta) => {
        //   return rolCuenta.rolGrupoCodigo + ' - ' + rolCuenta.rolNombre;
        // }),
        roles: '',
      };

      cuentaBD.instUltSesion = new Date();
      if (cuentaBD.numIntFallidos > 0) {
        cuentaBD.numIntFallidos = 0;
      }
      //await this.modificar(cuentaBD.id, cuentaBD);

      return await {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      await this.establecerIntentoFallido(objetoDto.cuenta);
      return await {
        access_token: null,
      };
    }
  }

  async registrarse(
    objetoDto: CuentaCreacionDto,
    usuarioDto: UsuarioCreacionDto = null,
    roles: string[],
  ): Promise<RespuestaObjetoDto<CuentaDto>> {
    const cuentaBD =
      await this.repositorioFactory.cuentaRepositorio.obtenerPorNombre(
        objetoDto.nombre,
      );
    if (cuentaBD) {
      return new RespuestaObjetoDto(
        TipoRespuesta.Error,
        'La cuenta ya existe.',
        null,
      );
    }

    const usuarioBD =
      await this.repositorioFactory.usuarioRepositorio.obtenerObjetoPor({
        correoElectronico: usuarioDto.correoElectronico,
      } as UsuarioFiltroDto);
    if (usuarioBD) {
      return new RespuestaObjetoDto(
        TipoRespuesta.Error,
        'El correo electrónico ya esta en uso en otra cuenta.',
        null,
      );
    }

    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(objetoDto, CuentaCreacionDto, Cuenta);
      // TODO: parametrizar las caracteristicas que debe cumplir una contraseña
      objeto.codigo = FuncionesHelper.obtenerCadenaAleatoria(10);
      objeto.clave = await bcrypt.genSalt();
      objeto.contrasenia = await bcrypt.hash(objeto.contrasenia, objeto.clave);
      objeto.estaAutorizada = true;
      objeto.instUltSesion = null;
      objeto.numIntFallidos = 0;
      objeto.estaBloqueada = false;
      objeto.instUltBloqueo = null;
      const id = await this.repositorioFactory.cuentaRepositorio.guardar(
        objeto,
        transaccion,
      );
      if (id === 0) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no se ha podido guardar.',
          null,
        );
      }

      if (usuarioDto) {
        const usuario = this.mapper.map(
          usuarioDto,
          UsuarioCreacionDto,
          Usuario,
        );
        usuario.id = id;
        usuario.nombre = usuario.nombre || '';
        usuario.apellido = usuario.apellido || '';
        const usuarioId =
          await this.repositorioFactory.usuarioRepositorio.guardar(
            usuario,
            transaccion,
          );
        if (usuarioId === 0) {
          await this.repositorioFactory.revertir(transaccion);
          return new RespuestaObjetoDto(
            TipoRespuesta.Error,
            'El registro no se ha podido guardar.',
            null,
          );
        }
      }

      if (roles && roles.length > 0) {
        for (const rol of roles) {
          const rolBD =
            await this.repositorioFactory.rolRepositorio.obtenerObjetoPor({
              codigo: rol,
            } as Rol);
          if (rolBD) {
            const rolCuenta = new RolCuenta();
            rolCuenta.instRegistro = new Date();
            rolCuenta.fecInicio = new Date();
            rolCuenta.fecConclusion = null;
            rolCuenta.rolId = rolBD.id;
            rolCuenta.cuentaId = id;
            const rolCuentaId =
              await this.repositorioFactory.rolCuentaRepositorio.guardar(
                rolCuenta,
                transaccion,
              );
            if (rolCuentaId === 0) {
              await this.repositorioFactory.revertir(transaccion);
              return new RespuestaObjetoDto(
                TipoRespuesta.Error,
                'El registro no se ha podido guardar.',
                null,
              );
            }
          } else {
            await this.repositorioFactory.revertir(transaccion);
            return new RespuestaObjetoDto(
              TipoRespuesta.Error,
              'El registro no se ha podido guardar',
              null,
            );
          }
        }
      } else {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no se ha podido guardar.',
          null,
        );
      }

      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, Cuenta, CuentaDto),
      );
    } catch (error) {
      await this.repositorioFactory.revertir(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Excepcion,
        error.toString(),
        null,
      );
    } finally {
      await this.repositorioFactory.liberar(transaccion);
    }
  }
}

export const CUENTA_SERVICIO_PROVIDER = {
  provide: CUENTA_SERVICIO,
  useClass: CuentaService,
};
