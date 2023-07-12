import { Inject, Injectable } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

import { FuncionesHelper } from '../../../comun/auxiliares';
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
  IPersonaServicio,
  PERSONA_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { Persona } from '../../dominio/entidades';
import { PersonaFiltro } from '../../dominio/entidades/filtros';
import {
  PersonaCreacionDto,
  PersonaDto,
  PersonaModificacionDto,
} from '../../dominio/transferencia';
import { PersonaFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class PersonaService implements IPersonaServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<Persona>,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new PersonaFiltro();
        filtro.numDocumento = objetoDto.numDocumento;
        filtro.expedicion = objetoDto.expedicion;
        const personaBD =
          await this.repositorioFactory.personaRepositorio.obtenerObjetoPor(
            filtro,
          );
        if (personaBD) {
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
    filtroDto: PersonaFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<PersonaDto>> {
    const respuesta =
      await this.repositorioFactory.personaRepositorio.obtenerPor(
        this.mapper.map(filtroDto, PersonaFiltroDto, PersonaFiltro),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<PersonaDto>(
      this.mapper.mapArray(respuesta.lista, Persona, PersonaDto),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<PersonaDto> {
    const objeto =
      await this.repositorioFactory.personaRepositorio.obtenerPorId(id);
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Persona, PersonaDto);
  }

  async guardar(
    objetoDto: PersonaCreacionDto,
  ): Promise<RespuestaObjetoDto<PersonaDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(objetoDto, PersonaCreacionDto, Persona);
      objeto.codigo = FuncionesHelper.obtenerSHA1Aleatorio();
      await this.repositorioFactory.personaRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, Persona, PersonaDto),
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
    objetoDto: PersonaModificacionDto,
  ): Promise<RespuestaObjetoDto<Persona>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        PersonaModificacionDto,
        Persona,
      );
      delete objeto.codigo;
      await this.repositorioFactory.personaRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, Persona, PersonaDto),
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
      await this.repositorioFactory.personaRepositorio.obtenerPorId(id);
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
      await this.repositorioFactory.personaRepositorio.eliminar(
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

export const PERSONA_SERVICIO_PROVIDER = {
  provide: PERSONA_SERVICIO,
  useClass: PersonaService,
};
