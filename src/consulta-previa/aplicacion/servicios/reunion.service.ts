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
  IReunionServicio,
  REUNION_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { Reunion } from '../../dominio/entidades';
import { ReunionFiltro } from '../../dominio/entidades/filtros';
import {
  ReunionCreacionDto,
  ReunionDto,
  ReunionModificacionDto,
} from '../../dominio/transferencia';
import { ReunionFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class ReunionService implements IReunionServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<Reunion> ,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new ReunionFiltro();
        filtro.fk_idNotificacion = objetoDto.fk_idNotificacion;
        filtro.nroReunion = objetoDto.nroReunion;
        filtro.conAcuerdo = objetoDto.conAcuerdo;
        filtro.sinAcuerdo = objetoDto.sinAcuerdo;
        filtro.motivo = objetoDto.motivo;
        filtro.reunionRealizada = objetoDto.reunionRealizada;
        filtro.actaReunionPdf = objetoDto.actaReunionPdf;
        const ReunionBD =
          await this.repositorioFactory.reunionRepositorio.obtenerObjetoPor(
            filtro,
          );
        if (ReunionBD) {
          errores.push('El número de documento detalle ya existe.');
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
    filtroDto: ReunionFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<ReunionDto>> {
    const respuesta =
      await this.repositorioFactory.reunionRepositorio.obtenerPor(
        this.mapper.map(
          filtroDto,
          ReunionFiltroDto,
          ReunionFiltro,
        ),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<ReunionDto>(
      this.mapper.mapArray(
        respuesta.lista,
        Reunion,
        ReunionDto,
      ),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<ReunionDto> {
    const objeto =
      await this.repositorioFactory.reunionRepositorio.obtenerPorId(
        id,
      );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Reunion, ReunionDto);
  }

  async guardar(
    objetoDto: ReunionCreacionDto,
  ): Promise<RespuestaObjetoDto<ReunionDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        ReunionCreacionDto,
        Reunion,
      );
      await this.repositorioFactory.reunionRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, Reunion, ReunionDto),
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
    objetoDto: ReunionModificacionDto | any,
  ): Promise<RespuestaObjetoDto<ReunionDto>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        ReunionModificacionDto,
        Reunion,
      );
      await this.repositorioFactory.reunionRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, Reunion, ReunionDto),
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
      await this.repositorioFactory.reunionRepositorio.obtenerPorId(
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
      await this.repositorioFactory.reunionRepositorio.eliminar(
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

export const REUNION_SERVICIO_PROVIDER = {
  provide: REUNION_SERVICIO,
  useClass: ReunionService,
};
