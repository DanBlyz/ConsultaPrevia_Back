
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

import { IReunionRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { ReunionEntity } from '../orm';
import { Reunion } from '../../../../dominio/entidades';
import { ReunionFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(ReunionEntity)
export class ReunionRepository implements IReunionRepositorio {
  private repositorio: Repository<ReunionEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(ReunionEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<ReunionEntity>,
    filtro: ReunionFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<ReunionEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.nroReunion && filtro.nroReunion !== '') {
      consulta = consulta.andWhere('reunion.nroReunion ILIKE :nroReunion', {
        nroReunion: `%${filtro.nroReunion}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.motivo && filtro.motivo !== '') {
      consulta = consulta.andWhere('reunion.motivo ILIKE :motivo', {
        motivo: `%${filtro.motivo}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.actaReunionPdf && filtro.actaReunionPdf !== '') {
      consulta = consulta.andWhere('reunion.actaReunionPdf ILIKE :actaReunionPdf', {
        actaReunionPdf: `%${filtro.actaReunionPdf}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.encargado && filtro.encargado !== '') {
      consulta = consulta.andWhere('reunion.encargado ILIKE :encargado', {
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

  async obtenerPorId(id: number): Promise<Reunion> {
    let consulta = this.repositorio
      .createQueryBuilder('reunion')
      .leftJoinAndSelect('reunion.notificacion', 'notificacion')
      .andWhere('reunion.id = :id', { id });
    consulta = consulta.orderBy('reunion.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta,ReunionEntity, Reunion)
      : null;
  }

  async obtenerObjetoPor(
    filtro: ReunionFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Reunion> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('reunion')
      .leftJoinAndSelect('reunion.notificacion', 'notificacion')

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`reunion.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, ReunionEntity, Reunion)
      : null;
  }

  async obtenerPor(
    filtro: ReunionFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Reunion>> {
    let consulta = this.repositorio
      .createQueryBuilder('reunion')
      .leftJoinAndSelect('reunion.notificacion', 'notificacion')

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`reunion.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<Reunion>(
      this.mapper.mapArray(respuesta[0], ReunionEntity, Reunion),
      respuesta[1],
    );
  }

  async guardar(objeto: Reunion, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: ReunionEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(ReunionRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<Reunion>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(ReunionEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(ReunionEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(ReunionRepository.name, error);
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
        .delete(ReunionEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(ReunionRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(ReunionEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(ReunionEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(ReunionRepository.name, error);
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

export const REUNION_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Reunion),
  useClass: ReunionRepository,
};
