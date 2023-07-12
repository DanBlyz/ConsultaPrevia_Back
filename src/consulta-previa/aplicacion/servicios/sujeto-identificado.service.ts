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
  ISujetoIdentificadoServicio,
  SUJETO_IDENTIFICADO_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { SujetoIdentificado } from '../../dominio/entidades';
import { SujetoIdentificadoFiltro } from '../../dominio/entidades/filtros';
import {
  SujetoIdentificadoCreacionDto,
  SujetoIdentificadoDto,
  SujetoIdentificadoModificacionDto,
} from '../../dominio/transferencia';
import { SujetoIdentificadoFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class SujetoIdentificadoService implements ISujetoIdentificadoServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<SujetoIdentificado> ,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new SujetoIdentificadoFiltro();
        filtro.fk_idInforme = objetoDto.fk_idInforme;
        filtro.comunidad = objetoDto.comunidad;
        filtro.representante = objetoDto.representante;
        const sujetoIdentificadoBD =
          await this.repositorioFactory.sujetoIdentificadoRepositorio.obtenerObjetoPor(
            filtro,
          );
        if (sujetoIdentificadoBD) {
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
    filtroDto: SujetoIdentificadoFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<SujetoIdentificadoDto>> {
    const respuesta =
      await this.repositorioFactory.sujetoIdentificadoRepositorio.obtenerPor(
        this.mapper.map(
          filtroDto,
          SujetoIdentificadoFiltroDto,
          SujetoIdentificadoFiltro,
        ),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<SujetoIdentificadoDto>(
      this.mapper.mapArray(
        respuesta.lista,
        SujetoIdentificado,
        SujetoIdentificadoDto,
      ),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<SujetoIdentificadoDto> {
    const objeto =
      await this.repositorioFactory.sujetoIdentificadoRepositorio.obtenerPorId(
        id,
      );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, SujetoIdentificado, SujetoIdentificadoDto);
  }

  async guardar(
    objetoDto: SujetoIdentificadoCreacionDto,
  ): Promise<RespuestaObjetoDto<SujetoIdentificadoDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        SujetoIdentificadoCreacionDto,
        SujetoIdentificado,
      );
      await this.repositorioFactory.sujetoIdentificadoRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, SujetoIdentificado, SujetoIdentificadoDto),
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
    objetoDto: SujetoIdentificadoModificacionDto,
  ): Promise<RespuestaObjetoDto<SujetoIdentificadoDto>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        SujetoIdentificadoModificacionDto,
        SujetoIdentificado,
      );
      await this.repositorioFactory.sujetoIdentificadoRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, SujetoIdentificado, SujetoIdentificadoDto),
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
      await this.repositorioFactory.sujetoIdentificadoRepositorio.obtenerPorId(
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
      await this.repositorioFactory.sujetoIdentificadoRepositorio.eliminar(
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

export const SUJETO_IDENTIFICADO_SERVICIO_PROVIDER = {
  provide: SUJETO_IDENTIFICADO_SERVICIO,
  useClass: SujetoIdentificadoService,
};
