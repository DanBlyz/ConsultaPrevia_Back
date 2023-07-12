import { Inject, Injectable } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

import {
  RespuestaDto,
  RespuestaObjetoDto,
  TipoRespuesta,
} from '../../../comun/transferencia';

import {
  IRepositorioFactory,
  REPOSITORIO_FACTORY,
} from '../../dominio/contratos/infraestructura/persistencia';
import {
  FOTOGRAFIA_SERVICIO,
  IFotografiaServicio,
} from '../../dominio/contratos/aplicacion/servicios';
import { Fotografia } from '../../dominio/entidades';
import { PersonaFiltroDto } from '../../dominio/transferencia/filtros';
import {
  FotografiaCreacionDto,
  FotografiaDto,
} from '../../dominio/transferencia';

@Injectable()
export class FotografiaService implements IFotografiaServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<Fotografia>,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        if (!objetoDto.archivo) {
          errores.push('El archivo no puede ser nulo.');
          return false;
        }
        return true;
      }
      case 'modificar': {
        if (!objetoDto) {
          errores.push('El objeto no puede ser nulo.');
          return false;
        }
        return true;
      }
      case 'eliminar': {
        return true;
      }
    }
  }

  async obtenerPorId(id: number): Promise<FotografiaDto> {
    const objeto =
      await this.repositorioFactory.fotografiaRepositorio.obtenerPorId(id);
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Fotografia, FotografiaDto);
  }

  async guardar(
    objetoDto: FotografiaCreacionDto,
  ): Promise<RespuestaObjetoDto<FotografiaDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        FotografiaCreacionDto,
        Fotografia,
      );
      await this.repositorioFactory.fotografiaRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, Fotografia, FotografiaDto),
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
      await this.repositorioFactory.fotografiaRepositorio.obtenerPorId(id);
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
      await this.repositorioFactory.fotografiaRepositorio.eliminar(
        id,
        transaccion,
        true,
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

  async obtenerPorCodigo(codigo: string): Promise<FotografiaDto> {
    const filtro = new PersonaFiltroDto();
    filtro.codigo = codigo;
    const persona =
      await this.repositorioFactory.personaRepositorio.obtenerObjetoPor(filtro);
    if (persona) {
      return this.obtenerPorId(persona.id);
    } else {
      return null;
    }
  }
}

export const FOTOGRAFIA_SERVICIO_PROVIDER = {
  provide: FOTOGRAFIA_SERVICIO,
  useClass: FotografiaService,
};
