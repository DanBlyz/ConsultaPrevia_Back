import { Inject, Injectable } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

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
  IRolCuentaServicio,
  ROL_CUENTA_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { RolCuenta } from '../../dominio/entidades';
import {
  RolCuentaCreacionDto,
  RolCuentaDto,
  RolCuentaModificacionDto,
} from '../../dominio/transferencia';

@Injectable()
export class RolCuentaService implements IRolCuentaServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async obtenerporCuentaId(cuentaId: number): Promise<RolCuentaDto[]> {
    const lista =
      await this.repositorioFactory.rolCuentaRepositorio.obtenerPorCuentaId(
        cuentaId,
      );
    return this.mapper.mapArray(lista, RolCuenta, RolCuentaDto);
  }

  async obtenerPorId(id: number): Promise<RolCuentaDto> {
    const objeto =
      await this.repositorioFactory.rolCuentaRepositorio.obtenerPorId(id);
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, RolCuenta, RolCuentaDto);
  }

  async guardar(
    objetoDto: RolCuentaCreacionDto,
  ): Promise<RespuestaObjetoDto<RolCuentaDto>> {
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        RolCuentaCreacionDto,
        RolCuenta,
      );
      objeto.instRegistro = new Date();
      const id = await this.repositorioFactory.rolCuentaRepositorio.guardar(
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
        this.mapper.map(objeto, RolCuenta, RolCuentaDto),
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
    objetoDto: RolCuentaModificacionDto,
  ): Promise<RespuestaObjetoDto<RolCuentaDto>> {
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        RolCuentaModificacionDto,
        RolCuenta,
      );
      const operacion =
        await this.repositorioFactory.rolCuentaRepositorio.modificar(
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
        this.mapper.map(objeto, RolCuenta, RolCuentaDto),
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
        await this.repositorioFactory.rolCuentaRepositorio.eliminar(
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

export const ROL_CUENTA_SERVICIO_PROVIDER = {
  provide: ROL_CUENTA_SERVICIO,
  useClass: RolCuentaService,
};
