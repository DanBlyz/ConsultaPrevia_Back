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
  IViajeServicio,
  VIAJE_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { Viaje } from '../../dominio/entidades';
import { ViajeFiltro } from '../../dominio/entidades/filtros';
import {
  ViajeCreacionDto,
  ViajeDto,
  ViajeModificacionDto,
} from '../../dominio/transferencia';
import { ViajeFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class ViajeService implements IViajeServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<Viaje>,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new ViajeFiltro();
        filtro.fk_idPago = objetoDto.fk_idPago;
        filtro.fechaInicio = objetoDto.fechaInicio;
        filtro.fechaFin = objetoDto.fechaFin;
        filtro.descripcion = objetoDto.descripcion;
        filtro.nroFormulario = objetoDto.nroFormulario;
        filtro.formularioPdf = objetoDto.formularioPdf;
        const ViajeBD =
          await this.repositorioFactory.viajeRepositorio.obtenerObjetoPor(
            filtro,
          );
        if (ViajeBD) {
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
    filtroDto: ViajeFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<ViajeDto>> {
    const respuesta =
      await this.repositorioFactory.viajeRepositorio.obtenerPor(
        this.mapper.map(
          filtroDto,
          ViajeFiltroDto,
          ViajeFiltro,
        ),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<ViajeDto>(
      this.mapper.mapArray(
        respuesta.lista,
        Viaje,
        ViajeDto,
      ),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<ViajeDto> {
    const objeto =
      await this.repositorioFactory.viajeRepositorio.obtenerPorId(
        id,
      );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Viaje, ViajeDto);
  }

  async guardar(
    objetoDto: ViajeCreacionDto,
  ): Promise<RespuestaObjetoDto<ViajeDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        ViajeCreacionDto,
        Viaje,
      );
      await this.repositorioFactory.viajeRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, Viaje, ViajeDto),
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
    objetoDto: ViajeModificacionDto,
  ): Promise<RespuestaObjetoDto<ViajeDto>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        ViajeModificacionDto,
        Viaje,
      );
      await this.repositorioFactory.viajeRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, Viaje, ViajeDto),
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
      await this.repositorioFactory.viajeRepositorio.obtenerPorId(
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
      await this.repositorioFactory.viajeRepositorio.eliminar(
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

export const VIAJE_SERVICIO_PROVIDER = {
  provide: VIAJE_SERVICIO,
  useClass: ViajeService,
};
