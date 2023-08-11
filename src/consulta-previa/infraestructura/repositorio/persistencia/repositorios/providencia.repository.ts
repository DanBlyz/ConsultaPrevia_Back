
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

import { IProvidenciaRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { ProvidenciaEntity } from '../orm';
import { Providencia } from '../../../../dominio/entidades';
import { ProvidenciaFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(ProvidenciaEntity)
export class ProvidenciaRepository implements IProvidenciaRepositorio {
  private repositorio: Repository<ProvidenciaEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(ProvidenciaEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<ProvidenciaEntity>,
    filtro: ProvidenciaFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<ProvidenciaEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.correlativo && filtro.correlativo !== '') {
      consulta = consulta.andWhere('providencia.correlativo ILIKE :correlativo', {
        correlativo: `%${filtro.correlativo}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.referencia && filtro.referencia !== '') {
      consulta = consulta.andWhere('providencia.referencia ILIKE :referencia', {
        referencia: `%${filtro.referencia}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.providenciaPdf && filtro.providenciaPdf !== '') {
      consulta = consulta.andWhere('providencia.providenciaPdf ILIKE :providenciaPdf', {
        providenciaPdf: `%${filtro.providenciaPdf}%`,
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

  async obtenerPorId(id: number): Promise<Providencia> {
    let consulta = this.repositorio
      .createQueryBuilder('providencia')
      .leftJoinAndSelect('providencia.tramite', 'tramite')
      .andWhere('providencia.id = :id', { id });
    consulta = consulta.orderBy('providencia.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta,ProvidenciaEntity, Providencia)
      : null;
  }

  async obtenerObjetoPor(
    filtro: ProvidenciaFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Providencia> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('providencia')
      .leftJoinAndSelect('providencia.tramite', 'tramite')

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`providencia.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, ProvidenciaEntity, Providencia)
      : null;
  }

  async obtenerPor(
    filtro: ProvidenciaFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Providencia>> {
    let consulta = this.repositorio
      .createQueryBuilder('providencia')
      .leftJoinAndSelect('providencia.tramite', 'tramite')

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`providencia.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<Providencia>(
      this.mapper.mapArray(respuesta[0], ProvidenciaEntity, Providencia),
      respuesta[1],
    );
  }

  async guardar(objeto: Providencia, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: ProvidenciaEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(ProvidenciaRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<Providencia>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(ProvidenciaEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(ProvidenciaEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(ProvidenciaRepository.name, error);
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
        .delete(ProvidenciaEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(ProvidenciaRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(ProvidenciaEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(ProvidenciaEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(ProvidenciaRepository.name, error);
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

export const PROVIDENCIA_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Providencia),
  useClass: ProvidenciaRepository,
};
