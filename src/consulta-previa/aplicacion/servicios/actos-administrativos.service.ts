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
  IActoAdministrativoServicio,
  ACTOS_ADMINISTRATIVOS_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { ActoAdministrativo } from '../../dominio/entidades';
import { ActoAdministrativoFiltro } from '../../dominio/entidades/filtros';
import {
  ActoAdministrativoCreacionDto,
  ActoAdministrativoDto,
  ActoAdministrativoModificacionDto,
} from '../../dominio/transferencia';
import { ActoAdministrativoFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class ActoAdministrativoService implements IActoAdministrativoServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<ActoAdministrativo>,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new ActoAdministrativoFiltro();
        filtro.fk_idTramite = objetoDto.fk_idTramite;
        filtro.viajeRealizado = objetoDto.viajeRealizado;
        const ActoAdministrativoBD =
          await this.repositorioFactory.actoAdministrativoRepositorio.obtenerObjetoPor(
            filtro,
          );
        if (ActoAdministrativoBD) {
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
    filtroDto: ActoAdministrativoFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<ActoAdministrativoDto>> {
    const respuesta =
      await this.repositorioFactory.actoAdministrativoRepositorio.obtenerPor(
        this.mapper.map(
          filtroDto,
          ActoAdministrativoFiltroDto,
          ActoAdministrativoFiltro,
        ),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<ActoAdministrativoDto>(
      this.mapper.mapArray(
        respuesta.lista,
        ActoAdministrativo,
        ActoAdministrativoDto,
      ),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<ActoAdministrativoDto> {
    const objeto =
      await this.repositorioFactory.actoAdministrativoRepositorio.obtenerPorId(
        id,
      );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, ActoAdministrativo, ActoAdministrativoDto);
  }

  async guardar(
    objetoDto: ActoAdministrativoCreacionDto,
  ): Promise<RespuestaObjetoDto<ActoAdministrativoDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        ActoAdministrativoCreacionDto,
        ActoAdministrativo,
      );
      await this.repositorioFactory.actoAdministrativoRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, ActoAdministrativo, ActoAdministrativoDto),
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
    objetoDto: ActoAdministrativoModificacionDto,
  ): Promise<RespuestaObjetoDto<ActoAdministrativoDto>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        ActoAdministrativoModificacionDto,
        ActoAdministrativo,
      );
      await this.repositorioFactory.actoAdministrativoRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, ActoAdministrativo, ActoAdministrativoDto),
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
      await this.repositorioFactory.actoAdministrativoRepositorio.obtenerPorId(
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
      await this.repositorioFactory.actoAdministrativoRepositorio.eliminar(
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

export const ACTOS_ADMINISTRATIVOS_SERVICIO_PROVIDER = {
  provide: ACTOS_ADMINISTRATIVOS_SERVICIO,
  useClass: ActoAdministrativoService,
};
