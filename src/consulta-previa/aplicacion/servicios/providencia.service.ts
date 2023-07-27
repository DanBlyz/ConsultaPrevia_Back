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
  IProvidenciaServicio,
  PROVIDENCIA_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { Providencia } from '../../dominio/entidades';
import { ProvidenciaFiltro } from '../../dominio/entidades/filtros';
import {
  ProvidenciaCreacionDto,
  ProvidenciaDto,
  ProvidenciaModificacionDto,
} from '../../dominio/transferencia';
import { ProvidenciaFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class ProvidenciaService implements IProvidenciaServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<Providencia>,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new ProvidenciaFiltro();
        filtro.fk_idTramite = objetoDto.fk_idTramite;
        filtro.correlativo = objetoDto.correlativo;
        filtro.referencia = objetoDto.referencia;
        filtro.providenciaPdf = objetoDto.providenciaPdf;
        const providenciaBD =
          await this.repositorioFactory.providenciaRepositorio.obtenerObjetoPor(
            filtro,
          );
        if (providenciaBD) {
          errores.push('El correlativo de providencia ya existe.');
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
    filtroDto: ProvidenciaFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<ProvidenciaDto>> {
    const respuesta =
      await this.repositorioFactory.providenciaRepositorio.obtenerPor(
        this.mapper.map(
          filtroDto,
          ProvidenciaFiltroDto,
          ProvidenciaFiltro,
        ),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<ProvidenciaDto>(
      this.mapper.mapArray(
        respuesta.lista,
        Providencia,
        ProvidenciaDto,
      ),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<ProvidenciaDto> {
    const objeto =
      await this.repositorioFactory.providenciaRepositorio.obtenerPorId(
        id,
      );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Providencia, ProvidenciaDto);
  }

  async guardar(
    objetoDto: ProvidenciaCreacionDto,
  ): Promise<RespuestaObjetoDto<ProvidenciaDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        ProvidenciaCreacionDto,
        Providencia,
      );
      await this.repositorioFactory.providenciaRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, Providencia, ProvidenciaDto),
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
    objetoDto: ProvidenciaModificacionDto,
  ): Promise<RespuestaObjetoDto<ProvidenciaDto>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        ProvidenciaModificacionDto,
        Providencia,
      );
      await this.repositorioFactory.providenciaRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, Providencia, ProvidenciaDto),
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
      await this.repositorioFactory.providenciaRepositorio.obtenerPorId(
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
      await this.repositorioFactory.providenciaRepositorio.eliminar(
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

export const PROVIDENCIA_SERVICIO_PROVIDER = {
  provide: PROVIDENCIA_SERVICIO,
  useClass: ProvidenciaService,
};
