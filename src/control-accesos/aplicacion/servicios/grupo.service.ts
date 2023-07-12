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
  GRUPO_SERVICIO,
  IGrupoServicio,
} from '../../dominio/contratos/aplicacion/servicios';
import { Grupo } from '../../dominio/entidades';
import { GrupoFiltro } from '../../dominio/entidades/filtros';
import {
  GrupoCreacionDto,
  GrupoDto,
  GrupoModificacionDto,
} from '../../dominio/transferencia';
import { GrupoFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class GrupoService implements IGrupoServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async buscar(
    filtroDto: GrupoFiltroDto,
    pagina: number,
    cantidad: number,
  ): Promise<ListaPaginadaDto<GrupoDto>> {
    const respuesta = await this.repositorioFactory.grupoRepositorio.obtenerPor(
      this.mapper.map(filtroDto, GrupoFiltroDto, GrupoFiltro),
      pagina,
      cantidad,
    );
    return new ListaPaginadaDto<GrupoDto>(
      this.mapper.mapArray(respuesta.lista, Grupo, GrupoDto),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<GrupoDto> {
    const objeto = await this.repositorioFactory.grupoRepositorio.obtenerPorId(
      id,
    );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Grupo, GrupoDto);
  }

  async guardar(
    objetoDto: GrupoCreacionDto,
  ): Promise<RespuestaObjetoDto<GrupoDto>> {
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(objetoDto, GrupoCreacionDto, Grupo);
      const id = await this.repositorioFactory.grupoRepositorio.guardar(
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
        this.mapper.map(objeto, Grupo, GrupoDto),
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
    objetoDto: GrupoModificacionDto,
  ): Promise<RespuestaObjetoDto<GrupoDto>> {
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(objetoDto, GrupoModificacionDto, Grupo);
      const operacion =
        await this.repositorioFactory.grupoRepositorio.modificar(
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
        this.mapper.map(objeto, Grupo, GrupoDto),
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
      const operacion = await this.repositorioFactory.grupoRepositorio.eliminar(
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

export const GRUPO_SERVICIO_PROVIDER = {
  provide: GRUPO_SERVICIO,
  useClass: GrupoService,
};
