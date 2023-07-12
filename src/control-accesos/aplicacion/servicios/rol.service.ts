import { Inject, Injectable } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

import { FuncionesHelper } from '../../../comun/auxiliares';
import {
  RespuestaDto,
  RespuestaObjetoDto,
  TipoRespuesta,
} from '../../../comun/transferencia';

import {
  IRepositorioFactory,
  REPOSITORIO_FACTORY,
} from '../../dominio/contratos/infraestructura/persistencia';
import {
  IRolServicio,
  ROL_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { Rol } from '../../dominio/entidades';
import {
  RolCreacionDto,
  RolDto,
  RolModificacionDto,
} from '../../dominio/transferencia';

@Injectable()
export class RolService implements IRolServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async obtenerTodo(): Promise<RolDto[]> {
    const respuesta = await this.repositorioFactory.rolRepositorio.obtenerPor(
      null,
      0,
      0,
    );
    return this.mapper.mapArray(respuesta.lista, Rol, RolDto);
  }

  async obtenerPorId(id: number): Promise<RolDto> {
    const objeto = await this.repositorioFactory.rolRepositorio.obtenerPorId(
      id,
    );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Rol, RolDto);
  }

  async guardar(
    objetoDto: RolCreacionDto,
  ): Promise<RespuestaObjetoDto<RolDto>> {
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(objetoDto, RolCreacionDto, Rol);
      objeto.codigo = FuncionesHelper.obtenerSHA1Aleatorio();
      const id = await this.repositorioFactory.rolRepositorio.guardar(
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
        this.mapper.map(objeto, Rol, RolDto),
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
    objetoDto: RolModificacionDto,
  ): Promise<RespuestaObjetoDto<RolDto>> {
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(objetoDto, RolModificacionDto, Rol);
      delete objeto.codigo;
      const operacion = await this.repositorioFactory.rolRepositorio.modificar(
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
        this.mapper.map(objeto, Rol, RolDto),
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
      const operacion = await this.repositorioFactory.rolRepositorio.eliminar(
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
}

export const ROL_SERVICIO_PROVIDER = {
  provide: ROL_SERVICIO,
  useClass: RolService,
};
