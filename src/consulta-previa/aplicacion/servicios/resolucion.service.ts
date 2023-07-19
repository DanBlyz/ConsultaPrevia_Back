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
  IResolucionServicio,
  RESOLUCION_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { ActoAdministrativo, Resolucion } from '../../dominio/entidades';
import { ResolucionFiltro } from '../../dominio/entidades/filtros';
import {
  ResolucionCreacionDto,
  ResolucionDto,
  ResolucionModificacionDto,
} from '../../dominio/transferencia';
import { ResolucionFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class ResolucionService implements IResolucionServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<Resolucion>,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new ResolucionFiltro();
        filtro.informe = objetoDto.informe;
        filtro.resolucion = objetoDto.resolucion;
        filtro.informeAprobado = objetoDto.informeAprobado;
        filtro.actoAdministrativo = objetoDto.actoAdministrativo;
        filtro.resolucionPdf = objetoDto.resolucionPdf;
        const resolucionBD =
          await this.repositorioFactory.resolucionRepositorio.obtenerObjetoPor(
            filtro,
          );
        if (resolucionBD) {
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
    filtroDto: ResolucionFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<ResolucionDto>> {
    const respuesta =
      await this.repositorioFactory.resolucionRepositorio.obtenerPor(
        this.mapper.map(
          filtroDto,
          ResolucionFiltroDto,
          ResolucionFiltro,
        ),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<ResolucionDto>(
      this.mapper.mapArray(
        respuesta.lista,
        Resolucion,
        ResolucionDto,
      ),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<ResolucionDto> {
    const objeto =
      await this.repositorioFactory.resolucionRepositorio.obtenerPorId(
        id,
      );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Resolucion, ResolucionDto);
  }

  async guardar(
    objetoDto: ResolucionCreacionDto,
  ): Promise<RespuestaObjetoDto<ResolucionDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        ResolucionCreacionDto,
        Resolucion,
      );
      await this.repositorioFactory.resolucionRepositorio.guardar(
        objeto,
        transaccion,
      );


      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, Resolucion, ResolucionDto),
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
    objetoDto: ResolucionModificacionDto,
  ): Promise<RespuestaObjetoDto<ResolucionDto>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        ResolucionModificacionDto,
        Resolucion,
      );
      await this.repositorioFactory.resolucionRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      console.log(objeto.flujo === 'Deliberacion');
      console.log(objetoDto.flujo);
      console.log(objeto.fk_idTramite);
      if(objeto.flujo === 'Deliberacion'){
        console.log('aqui deli');
        const actoAdministrativo = new ActoAdministrativo();
        actoAdministrativo.fk_idTramite = objeto.fk_idTramite;
        actoAdministrativo.viajeRealizado = false;
        actoAdministrativo.flujo = 'Deliberacion';
        actoAdministrativo.encargado = null;
        await this.repositorioFactory.actoAdministrativoRepositorio.guardar(
          actoAdministrativo,
          transaccion,
        );
      }
      else{
        if(objeto.flujo === 'Mediacion'){
          const actoAdministrativo = new ActoAdministrativo();
          actoAdministrativo.fk_idTramite = objeto.fk_idTramite;
          actoAdministrativo.viajeRealizado = false;
          actoAdministrativo.flujo = 'Mediacion';
          actoAdministrativo.encargado = null;
          await this.repositorioFactory.actoAdministrativoRepositorio.guardar(
            actoAdministrativo,
            transaccion,
          );
        }
      }
      
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, Resolucion, ResolucionDto),
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
      await this.repositorioFactory.resolucionRepositorio.obtenerPorId(
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
      await this.repositorioFactory.resolucionRepositorio.eliminar(
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

export const RESOLUCION_SERVICIO_PROVIDER = {
  provide: RESOLUCION_SERVICIO,
  useClass: ResolucionService,
};
