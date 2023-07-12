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
  IPuestoServicio,
  PUESTO_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { Puesto } from '../../dominio/entidades';
import { PuestoFiltro } from '../../dominio/entidades/filtros';
import {
  PuestoCreacionDto,
  PuestoDto,
  PuestoModificacionDto,
} from '../../dominio/transferencia';
import { PuestoFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class PuestoService implements IPuestoServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<Puesto>,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new PuestoFiltro();
        filtro.nombre = objetoDto.nombre;
        filtro.uniOrganizacionalId = objetoDto.uniOrganizacionalId;
        const puestoBD =
          await this.repositorioFactory.puestoRepositorio.obtenerObjetoPor(
            filtro,
          );
        if (puestoBD) {
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
    filtroDto: PuestoFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<PuestoDto>> {
    const respuesta =
      await this.repositorioFactory.puestoRepositorio.obtenerPor(
        this.mapper.map(filtroDto, PuestoFiltroDto, PuestoFiltro),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<PuestoDto>(
      this.mapper.mapArray(respuesta.lista, Puesto, PuestoDto),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<PuestoDto> {
    const objeto = await this.repositorioFactory.puestoRepositorio.obtenerPorId(
      id,
    );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Puesto, PuestoDto);
  }

  async guardar(
    objetoDto: PuestoCreacionDto,
  ): Promise<RespuestaObjetoDto<PuestoDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(objetoDto, PuestoCreacionDto, Puesto);
      await this.repositorioFactory.puestoRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, Puesto, PuestoDto),
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
    objetoDto: PuestoModificacionDto,
  ): Promise<RespuestaObjetoDto<Puesto>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(objetoDto, PuestoModificacionDto, Puesto);
      await this.repositorioFactory.puestoRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, Puesto, PuestoDto),
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
    const objeto = await this.repositorioFactory.puestoRepositorio.obtenerPorId(
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
      await this.repositorioFactory.puestoRepositorio.eliminar(
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

export const PUESTO_SERVICIO_PROVIDER = {
  provide: PUESTO_SERVICIO,
  useClass: PuestoService,
};
