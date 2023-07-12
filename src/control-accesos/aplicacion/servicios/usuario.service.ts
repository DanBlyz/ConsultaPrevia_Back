import { Inject, Injectable } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

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
  IUsuarioServicio,
  USUARIO_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { Usuario } from '../../dominio/entidades';
import { UsuarioFiltro } from '../../dominio/entidades/filtros';
import {
  UsuarioCreacionDto,
  UsuarioDto,
  UsuarioModificacionDto,
} from '../../dominio/transferencia';
import {
  CuentaFiltroDto,
  UsuarioFiltroDto,
} from '../../dominio/transferencia/filtros';

@Injectable()
export class UsuarioService implements IUsuarioServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async buscar(
    filtroDto: UsuarioFiltroDto,
    pagina: number,
    cantidad: number,
  ): Promise<ListaPaginadaDto<Usuario>> {
    const respuesta =
      await this.repositorioFactory.usuarioRepositorio.obtenerPor(
        this.mapper.map(filtroDto, UsuarioFiltroDto, UsuarioFiltro),
        pagina,
        cantidad,
      );
    return new ListaPaginadaDto<Usuario>(
      this.mapper.mapArray(respuesta.lista, Usuario, UsuarioDto),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<UsuarioDto> {
    const objeto =
      await this.repositorioFactory.usuarioRepositorio.obtenerPorId(id);
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Usuario, UsuarioDto);
  }

  async guardar(
    objetoDto: UsuarioCreacionDto,
  ): Promise<RespuestaObjetoDto<UsuarioDto>> {
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(objetoDto, UsuarioCreacionDto, Usuario);
      const id = await this.repositorioFactory.usuarioRepositorio.guardar(
        objeto,
        transaccion,
      );
      if (id == 0) {
        await this.repositorioFactory.liberar(transaccion);
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
        this.mapper.map(objeto, Usuario, UsuarioDto),
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
    objetoDto: UsuarioModificacionDto,
  ): Promise<RespuestaObjetoDto<Usuario>> {
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        UsuarioModificacionDto,
        Usuario,
      );
      const operacion =
        await this.repositorioFactory.usuarioRepositorio.modificar(
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
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, Usuario, UsuarioDto),
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
      const operacion =
        await this.repositorioFactory.usuarioRepositorio.eliminar(
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

  async obtenerPorCodCuenta(codCuenta: string): Promise<UsuarioDto> {
    const filtro = new CuentaFiltroDto();
    filtro.codigo = codCuenta;
    const cuentaBD =
      await this.repositorioFactory.cuentaRepositorio.obtenerObjetoPor(filtro);
    if (cuentaBD) {
      const objeto =
        await this.repositorioFactory.usuarioRepositorio.obtenerPorId(
          cuentaBD.id,
        );
      return this.mapper.map(objeto, Usuario, UsuarioDto);
    } else {
      return null;
    }
  }

  async modificarPorCodCuenta(
    codCuenta: string,
    objetoDto: UsuarioModificacionDto,
  ) {
    const filtro = new CuentaFiltroDto();
    filtro.codigo = codCuenta;
    const cuentaBD =
      await this.repositorioFactory.cuentaRepositorio.obtenerObjetoPor(filtro);
    if (cuentaBD) {
      const respuesta = await this.modificar(cuentaBD.id, objetoDto);
      return respuesta;
    } else {
      return null;
    }
  }
}

export const USUARIO_SERVICIO_PROVIDER = {
  provide: USUARIO_SERVICIO,
  useClass: UsuarioService,
};
