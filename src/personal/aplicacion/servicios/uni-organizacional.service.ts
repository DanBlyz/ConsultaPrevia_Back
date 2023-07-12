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
  IUniOrganizacionalServicio,
  UNI_ORGANIZACIONAL_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { UniOrganizacional } from '../../dominio/entidades';
import { UniOrganizacionalFiltro } from '../../dominio/entidades/filtros';
import {
  UniOrganizacionalCreacionDto,
  UniOrganizacionalDto,
  UniOrganizacionalModificacionDto,
} from '../../dominio/transferencia';
import { UniOrganizacionalFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class UniOrganizacionalService implements IUniOrganizacionalServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<UniOrganizacional>,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new UniOrganizacionalFiltro();
        filtro.codigo = objetoDto.codigo;
        filtro.nombre = objetoDto.nombre;
        const uniOrganizacionalBD =
          await this.repositorioFactory.uniOrganizacionalRepositorio.obtenerObjetoPor(
            filtro,
          );
        if (uniOrganizacionalBD) {
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
    filtroDto: UniOrganizacionalFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<UniOrganizacionalDto>> {
    const respuesta =
      await this.repositorioFactory.uniOrganizacionalRepositorio.obtenerPor(
        this.mapper.map(
          filtroDto,
          UniOrganizacionalFiltroDto,
          UniOrganizacionalFiltro,
        ),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<UniOrganizacionalDto>(
      this.mapper.mapArray(
        respuesta.lista,
        UniOrganizacional,
        UniOrganizacionalDto,
      ),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<UniOrganizacionalDto> {
    const objeto =
      await this.repositorioFactory.uniOrganizacionalRepositorio.obtenerPorId(
        id,
      );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, UniOrganizacional, UniOrganizacionalDto);
  }

  async guardar(
    objetoDto: UniOrganizacionalCreacionDto,
  ): Promise<RespuestaObjetoDto<UniOrganizacionalDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        UniOrganizacionalCreacionDto,
        UniOrganizacional,
      );
      await this.repositorioFactory.uniOrganizacionalRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, UniOrganizacional, UniOrganizacionalDto),
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
    objetoDto: UniOrganizacionalModificacionDto,
  ): Promise<RespuestaObjetoDto<UniOrganizacionalDto>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        UniOrganizacionalModificacionDto,
        UniOrganizacional,
      );
      await this.repositorioFactory.uniOrganizacionalRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, UniOrganizacional, UniOrganizacionalDto),
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
      await this.repositorioFactory.uniOrganizacionalRepositorio.obtenerPorId(
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
      await this.repositorioFactory.uniOrganizacionalRepositorio.eliminar(
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

export const UNI_ORGANIZACIONAL_SERVICIO_PROVIDER = {
  provide: UNI_ORGANIZACIONAL_SERVICIO,
  useClass: UniOrganizacionalService,
};
