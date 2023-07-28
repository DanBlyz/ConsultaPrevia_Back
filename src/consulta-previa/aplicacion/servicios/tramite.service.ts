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
} from '../../dominio/contratos/infraestructura';
import {
  ITramiteServicio,
  TRAMITE_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { Tramite } from '../../dominio/entidades';
import { TramiteFiltro } from '../../dominio/entidades/filtros';
import {
  TramiteCreacionDto,
  TramiteDto,
  TramiteModificacionDto,
} from '../../dominio/transferencia';
import { TramiteFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class TramiteService implements ITramiteServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<Tramite>,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new TramiteFiltro();
        filtro.correlativo = objetoDto.correlativo;
        filtro.codigoUnico = objetoDto.codigoUnico;
        filtro.areaMinera = objetoDto.areaMinera;
        filtro.clasificacion = objetoDto.clasificacion;
        filtro.departamento = objetoDto.departamento;
        filtro.provincia = objetoDto.provincia;
        filtro.municipio = objetoDto.municipio;
        filtro.estado = objetoDto.estado;
        const tramiteBD =
          await this.repositorioFactory.tramiteRepositorio.obtenerObjetoPor(
            filtro,
          );
        if (tramiteBD) {
          errores.push('El correlativo de tramite ya existe.');
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
    filtroDto: TramiteFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<TramiteDto>> {
    const respuesta =
      await this.repositorioFactory.tramiteRepositorio.obtenerPor(
        this.mapper.map(
          filtroDto,
          TramiteFiltroDto,
          TramiteFiltro,
        ),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<TramiteDto>(
      this.mapper.mapArray(
        respuesta.lista,
        Tramite,
        TramiteDto,
      ),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<TramiteDto> {
    const objeto =
      await this.repositorioFactory.tramiteRepositorio.obtenerPorId(
        id,
      );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Tramite, TramiteDto);
  }

  async guardar(
    objetoDto: TramiteCreacionDto,
  ): Promise<RespuestaObjetoDto<TramiteDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        TramiteCreacionDto,
        Tramite,
      );
      await this.repositorioFactory.tramiteRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, Tramite, TramiteDto),
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
    objetoDto: TramiteModificacionDto | any,
  ): Promise<RespuestaObjetoDto<TramiteDto>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        TramiteModificacionDto,
        Tramite,
      );
      await this.repositorioFactory.tramiteRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, Tramite, TramiteDto),
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
      await this.repositorioFactory.tramiteRepositorio.obtenerPorId(
        id,
      );
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
      await this.repositorioFactory.tramiteRepositorio.eliminar(
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

export const TRAMITE_SERVICIO_PROVIDER = {
  provide: TRAMITE_SERVICIO,
  useClass: TramiteService,
};
