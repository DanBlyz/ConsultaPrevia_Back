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
  IInfoLaboralServicio,
  INFO_LABORAL_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { InfoLaboral } from '../../dominio/entidades';
import {
  InfoLaboralCreacionDto,
  InfoLaboralDto,
  InfoLaboralModificacionDto,
} from '../../dominio/transferencia';

@Injectable()
export class InfoLaboralService implements IInfoLaboralServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<InfoLaboral>,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new InfoLaboral();
        filtro.correoInstitucional = objetoDto.correoInstitucional;
        const infoLaboralBD =
          await this.repositorioFactory.infoLaboralRepositorio.obtenerObjetoPor(
            filtro,
          );
        if (infoLaboralBD) {
          errores.push('El registro ya existe.');
          return false;
        }
      }
      case 'modificar': {
        if (!objetoDto) {
          errores.push('El objeto no puede ser nulo.');
          return false;
        }
      }
      case 'eliminar': {
        return true;
      }
    }
  }

  async buscar(
    filtroDto: Partial<InfoLaboral>,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<InfoLaboralDto>> {
    const respuesta =
      await this.repositorioFactory.infoLaboralRepositorio.obtenerPor(
        filtroDto as InfoLaboral,
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<InfoLaboral>(
      this.mapper.mapArray(respuesta.lista, InfoLaboral, InfoLaboralDto),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<InfoLaboralDto> {
    const objeto =
      await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(id);
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, InfoLaboral, InfoLaboralDto);
  }

  async guardar(
    objetoDto: InfoLaboralCreacionDto,
  ): Promise<RespuestaObjetoDto<InfoLaboralDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        InfoLaboralCreacionDto,
        InfoLaboral,
      );
      await this.repositorioFactory.infoLaboralRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, InfoLaboral, InfoLaboralDto),
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
    objetoDto: InfoLaboralModificacionDto,
  ): Promise<RespuestaObjetoDto<InfoLaboral>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        InfoLaboralModificacionDto,
        InfoLaboral,
      );
      await this.repositorioFactory.infoLaboralRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        objeto as InfoLaboral,
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
    const objeto =
      await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(id);
    if (!objeto) {
      return new RespuestaDto(TipoRespuesta.Error, 'El registro no existe.');
    }
    const errores = [];
    const validacion = await this.validar('eliminar', objeto, errores);
    if (!validacion) {
      return new RespuestaDto(TipoRespuesta.Error, errores[0]);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      await this.repositorioFactory.infoLaboralRepositorio.eliminar(
        id,
        transaccion,
        false,
      );
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

export const INFO_LABORAL_SERVICIO_PROVIDER = {
  provide: INFO_LABORAL_SERVICIO,
  useClass: InfoLaboralService,
};
