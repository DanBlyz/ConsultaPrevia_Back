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
  IParametroServicio,
  PARAMETRO_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { Parametro } from '../../dominio/entidades';
import { ParametroFiltro } from '../../dominio/entidades/filtros';
import {
  ParametroCreacionDto,
  ParametroDto,
  ParametroModificacionDto,
} from '../../dominio/transferencia';
import { ParametroFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class ParametroService implements IParametroServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<Parametro>,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new ParametroFiltro();
        filtro.tipo = objetoDto.tipo;
        filtro.valor = objetoDto.valor;
        filtro.texto = objetoDto.texto;
        const parametroBD =
          await this.repositorioFactory.parametroRepositorio.obtenerObjetoPor(
            filtro,
          );
        if (parametroBD) {
          errores.push('El registro ya existe.');
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
    filtroDto: ParametroFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<ParametroDto>> {
    const respuesta =
      await this.repositorioFactory.parametroRepositorio.obtenerPor(
        this.mapper.map(filtroDto, ParametroFiltroDto, ParametroFiltro),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<ParametroDto>(
      this.mapper.mapArray(respuesta.lista, Parametro, ParametroDto),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<ParametroDto> {
    const objeto =
      await this.repositorioFactory.parametroRepositorio.obtenerPorId(id);
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Parametro, ParametroDto);
  }

  async guardar(
    objetoDto: ParametroCreacionDto,
  ): Promise<RespuestaObjetoDto<ParametroDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        ParametroCreacionDto,
        Parametro,
      );
      await this.repositorioFactory.parametroRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, Parametro, ParametroDto),
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
    objetoDto: ParametroModificacionDto,
  ): Promise<RespuestaObjetoDto<Parametro>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        ParametroModificacionDto,
        Parametro,
      );
      await this.repositorioFactory.parametroRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, Parametro, ParametroDto),
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
      await this.repositorioFactory.parametroRepositorio.obtenerPorId(id);
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
      await this.repositorioFactory.parametroRepositorio.eliminar(
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

export const PARAMETRO_SERVICIO_PROVIDER = {
  provide: PARAMETRO_SERVICIO,
  useClass: ParametroService,
};
