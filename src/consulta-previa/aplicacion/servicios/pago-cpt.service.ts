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
  IPagoCptServicio,
  PAGO_CPT_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { PagoCpt } from '../../dominio/entidades';
import { PagoCptFiltro } from '../../dominio/entidades/filtros';
import {
  PagoCptCreacionDto,
  PagoCptDto,
  PagoCptModificacionDto,
} from '../../dominio/transferencia';
import { PagoCptFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class PagoCptService implements IPagoCptServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<PagoCpt>,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new PagoCptFiltro();
        filtro.fk_idActos = objetoDto.fk_idActos;
        filtro.pagoRealizado = objetoDto.pagoRealizado;
        filtro.flujo = objetoDto.flujo;
        filtro.encargado = objetoDto.encargado;
        filtro.diasViaje = objetoDto.diasViaje;
        filtro.tipoViaje = objetoDto.tipoViaje;
        filtro.montoTotal = objetoDto.montoTotal;
        filtro.apm = objetoDto.apm;
        filtro.descripcion = objetoDto.descripcion;
        const PagoCptBD =
          await this.repositorioFactory.pagoCptRepositorio.obtenerObjetoPor(
            filtro,
          );
        /*if (PagoCptBD) {
          errores.push('El número de documento detalle ya existe.');
          return false;
        }*/
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
    filtroDto: PagoCptFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<PagoCptDto>> {
    const respuesta =
      await this.repositorioFactory.pagoCptRepositorio.obtenerPor(
        this.mapper.map(
          filtroDto,
          PagoCptFiltroDto,
          PagoCptFiltro,
        ),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<PagoCptDto>(
      this.mapper.mapArray(
        respuesta.lista,
        PagoCpt,
        PagoCptDto,
      ),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<PagoCptDto> {
    const objeto =
      await this.repositorioFactory.pagoCptRepositorio.obtenerPorId(
        id,
      );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, PagoCpt, PagoCptDto);
  }

  async guardar(
    objetoDto: PagoCptCreacionDto,
  ): Promise<RespuestaObjetoDto<PagoCptDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        PagoCptCreacionDto,
        PagoCpt,
      );
      await this.repositorioFactory.pagoCptRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, PagoCpt, PagoCptDto),
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
    objetoDto: PagoCptModificacionDto,
  ): Promise<RespuestaObjetoDto<PagoCptDto>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        PagoCptModificacionDto,
        PagoCpt,
      );
      await this.repositorioFactory.pagoCptRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, PagoCpt, PagoCptDto),
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
      await this.repositorioFactory.pagoCptRepositorio.obtenerPorId(
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
      await this.repositorioFactory.pagoCptRepositorio.eliminar(
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

export const PAGO_CPT_SERVICIO_PROVIDER = {
  provide: PAGO_CPT_SERVICIO,
  useClass: PagoCptService,
};
