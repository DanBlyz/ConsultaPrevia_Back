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
  INotificacionServicio,
  NOTIFICACION_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { ActoAdministrativo, Notificacion, Reunion } from '../../dominio/entidades';
import { NotificacionFiltro } from '../../dominio/entidades/filtros';
import {
  NotificacionCreacionDto,
  NotificacionDto,
  NotificacionModificacionDto,
} from '../../dominio/transferencia';
import { NotificacionFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class NotificacionService implements INotificacionServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<Notificacion>,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new NotificacionFiltro();
        filtro.notificado = objetoDto.notificado;
        filtro.direccionDpto = objetoDto.direccionDpto;
        filtro.notificacionPdf = objetoDto.notificacionPdf;
        const notificacionBD =
          await this.repositorioFactory.notificacionRepositorio.obtenerObjetoPor(
            filtro,
          );
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
    filtroDto: NotificacionFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<NotificacionDto>> {
    const respuesta =
      await this.repositorioFactory.notificacionRepositorio.obtenerPor(
        this.mapper.map(
          filtroDto,
          NotificacionFiltroDto,
          NotificacionFiltro,
        ),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<NotificacionDto>(
      this.mapper.mapArray(
        respuesta.lista,
        Notificacion,
        NotificacionDto,
      ),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<NotificacionDto> {
    const objeto =
      await this.repositorioFactory.notificacionRepositorio.obtenerPorId(
        id,
      );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Notificacion, NotificacionDto);
  }

  async guardar(
    objetoDto: NotificacionCreacionDto,
  ): Promise<RespuestaObjetoDto<NotificacionDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        NotificacionCreacionDto,
        Notificacion,
      );
      const NotificacionId =
      await this.repositorioFactory.notificacionRepositorio.guardar(
        objeto,
        transaccion,
      );
     //console.log(NotificacionId);
      if(objeto.flujo === 'Identificacion'){
        const actoAdministrativo = new ActoAdministrativo();
        actoAdministrativo.fk_idTramite = objeto.fk_idTramite;
        actoAdministrativo.viajeRealizado = false;
        actoAdministrativo.flujo = 'Identificacion';
        await this.repositorioFactory.actoAdministrativoRepositorio.guardar(
          actoAdministrativo,
          transaccion,
        );
      }
      else{
        if(objeto.representanteComunidad){
          if(objeto.flujo === 'Deliberacion' || objeto.flujo === 'Mediacion'){
            const reunion = new Reunion();
            reunion.fk_idNotificacion = NotificacionId;
            reunion.nroReunion = objeto.nroReunion;
            reunion.conAcuerdo = false;
            reunion.sinAcuerdo = false;
            reunion.motivo = null;
            reunion.reunionRealizada = false;
            reunion.actaReunionPdf = null;
            if(objeto.flujo === 'Deliberacion'){
              reunion.flujo = 'Deliberacion';
            }
            else{
              reunion.flujo = 'Mediacion';
            }
            await this.repositorioFactory.reunionRepositorio.guardar(
              reunion,
              transaccion,
            );
          }
        }
      }

      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, Notificacion, NotificacionDto),
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
    objetoDto: NotificacionModificacionDto,
  ): Promise<RespuestaObjetoDto<NotificacionDto>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        NotificacionModificacionDto,
        Notificacion,
      );
      await this.repositorioFactory.notificacionRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, Notificacion, NotificacionDto),
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
      await this.repositorioFactory.notificacionRepositorio.obtenerPorId(
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
      await this.repositorioFactory.notificacionRepositorio.eliminar(
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

export const NOTIFICACION_SERVICIO_PROVIDER = {
  provide: NOTIFICACION_SERVICIO,
  useClass: NotificacionService,
};
