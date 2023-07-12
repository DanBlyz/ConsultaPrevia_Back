
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

import { IActoAdministrativoRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { ActoAdministrativoEntity } from '../orm';
import { ActoAdministrativo } from '../../../../dominio/entidades';
import { ActoAdministrativoFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(ActoAdministrativoEntity)
export class ActoAdministrativoRepository implements IActoAdministrativoRepositorio {
  private repositorio: Repository<ActoAdministrativoEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(ActoAdministrativoEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<ActoAdministrativoEntity>,
    filtro: ActoAdministrativoFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<ActoAdministrativoEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.flujo && filtro.flujo !== '') {
      consulta = consulta.andWhere('ActoAdministrativo.flujo ILIKE :flujo', {
        flujo: `%${filtro.flujo}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.encargado && filtro.encargado !== '') {
      consulta = consulta.andWhere('ActoAdministrativo.encargado ILIKE :encargado', {
        encargado: `%${filtro.encargado}%`,
      });
      criterioUtilizado = true;
    }

    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<ActoAdministrativo> {
    let consulta = this.repositorio
      .createQueryBuilder('ActoAdministrativo')
      .leftJoinAndSelect('ActoAdministrativo.tramite', 'tramite')
      .andWhere('ActoAdministrativo.id = :id', { id });
    consulta = consulta.orderBy('ActoAdministrativo.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta,ActoAdministrativoEntity, ActoAdministrativo)
      : null;
  }

  async obtenerObjetoPor(
    filtro: ActoAdministrativoFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ActoAdministrativo> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('ActoAdministrativo')
      .leftJoinAndSelect('ActoAdministrativo.tramite', 'tramite')

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`ActoAdministrativo.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, ActoAdministrativoEntity, ActoAdministrativo)
      : null;
  }

  async obtenerPor(
    filtro: ActoAdministrativoFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<ActoAdministrativo>> {
    let consulta = this.repositorio
      .createQueryBuilder('ActoAdministrativo')
      .leftJoinAndSelect('ActoAdministrativo.tramite', 'tramite')

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`ActoAdministrativo.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<ActoAdministrativo>(
      this.mapper.mapArray(respuesta[0], ActoAdministrativoEntity, ActoAdministrativo),
      respuesta[1],
    );
  }

  async guardar(objeto: ActoAdministrativo, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: ActoAdministrativoEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(ActoAdministrativoRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<ActoAdministrativo>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(ActoAdministrativoEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(ActoAdministrativoEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(ActoAdministrativoRepository.name, error);
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
        .delete(ActoAdministrativoEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(ActoAdministrativoRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(ActoAdministrativoEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(ActoAdministrativoEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(ActoAdministrativoRepository.name, error);
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

export const ACTOS_ADMINISTRATIVOS_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(ActoAdministrativo),
  useClass: ActoAdministrativoRepository,
};
