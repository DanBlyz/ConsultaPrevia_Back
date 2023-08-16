
import { Injectable } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import {
  Connection,
  EntityRepository,
  QueryRunner,
  Repository,
  SelectQueryBuilder,
} from 'typeorm';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

import { ListaPaginada } from '../../../../../comun/modelos';

import { IResolucionRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { ResolucionEntity } from '../orm';
import { Resolucion } from '../../../../dominio/entidades';
import { ResolucionFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(ResolucionEntity)
export class ResolucionRepository implements IResolucionRepositorio {
  private repositorio: Repository<ResolucionEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(ResolucionEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<ResolucionEntity>,
    filtro: ResolucionFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<ResolucionEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.informe && filtro.informe !== '') {
      consulta = consulta.andWhere('resolucion.informe ILIKE :informe', {
        informe: `%${filtro.informe}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.correlativo && filtro.correlativo !== '') {
      consulta = consulta.andWhere('resolucion.correlativo ILIKE :correlativo', {
        correlativo: `%${filtro.correlativo}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.resolucionPdf && filtro.resolucionPdf !== '') {
      consulta = consulta.andWhere('resolucion.resolucionPdf ILIKE :resolucionPdf', {
        resolucionPdf: `%${filtro.resolucionPdf}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.referencia && filtro.referencia !== '') {
      consulta = consulta.andWhere('resolucion.referencia ILIKE :referencia', {
        referencia: `%${filtro.referencia}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.flujo && filtro.flujo !== '') {
      consulta = consulta.andWhere('resolucion.flujo ILIKE :flujo', {
        flujo: `%${filtro.flujo}%`,
      });
      criterioUtilizado = true;
    }
      if (filtro.flujo && filtro.flujo !== '') {
      consulta = consulta.andWhere('resolucion.flujo ILIKE :flujo', {
        flujo: `%${filtro.flujo}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.tramite && filtro.tramite.correlativo !== '') {
      consulta = consulta.andWhere('tramite.correlativo ILIKE :tramiteCorrelativo', {
        tramiteCorrelativo: `%${filtro.tramite.correlativo}%`,
      });
      criterioUtilizado = true;
    }

    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<Resolucion> {
    let consulta = this.repositorio
      .createQueryBuilder('resolucion')
      .leftJoinAndSelect('resolucion.tramite', 'tramite')
      .andWhere('resolucion.id = :id', { id });
    consulta = consulta.orderBy('resolucion.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta,ResolucionEntity, Resolucion)
      : null;
  }

  async obtenerObjetoPor(
    filtro: ResolucionFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Resolucion> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('resolucion')
      .leftJoinAndSelect('resolucion.tramite', 'tramite')

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`resolucion.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, ResolucionEntity, Resolucion)
      : null;
  }

  async obtenerPor(
    filtro: ResolucionFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Resolucion>> {
    let consulta = this.repositorio
      .createQueryBuilder('resolucion')
      .leftJoinAndSelect('resolucion.tramite', 'tramite')

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`resolucion.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<Resolucion>(
      this.mapper.mapArray(respuesta[0], ResolucionEntity, Resolucion),
      respuesta[1],
    );
  }

  async guardar(objeto: Resolucion, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: ResolucionEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(ResolucionRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<Resolucion>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(ResolucionEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(ResolucionEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(ResolucionRepository.name, error);
        return false;
      });
  }

  async eliminar(
    id: number,
    transaccion: QueryRunner,
    borradoFisico = false,
  ): Promise<boolean> {
    if (borradoFisico) {
      return await transaccion.manager
        .delete(ResolucionEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(ResolucionRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(ResolucionEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(ResolucionEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(ResolucionRepository.name, error);
          return false;
        });
    }
  }

 /* async obtenerCorrelativo(
    tipoDocumentoId: number,
    gestion: number,
  ): Promise<number> {
    const consulta = await this.repositorio
      .createQueryBuilder('tramite')
      .select('MAX(tramite.numero)', 'maximo')
      .where('documento.tipoDocumentoId = :tipoDocumentoId', {
        tipoDocumentoId,
      })
      .andWhere('documento.gestion = :gestion', { gestion })
      .getRawOne();
    return consulta.maximo ? consulta.maximo + 1 : 1;
  }
  */
}

export const RESOLUCION_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Resolucion),
  useClass: ResolucionRepository,
};
