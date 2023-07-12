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

import { IGrupoRepository } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { GrupoEntity } from '../orm';
import { Grupo } from '../../../../dominio/entidades';
import { GrupoFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(GrupoEntity)
export class GrupoRepository implements IGrupoRepository {
  private repositorio: Repository<GrupoEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(GrupoEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<GrupoEntity>,
    filtro: GrupoFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<GrupoEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.codigo && filtro.codigo !== null) {
      consulta = consulta.andWhere('grupo.codigo = :codigo', {
        codigo: filtro.codigo,
      });
      criterioUtilizado = true;
    }
    if (filtro.nombre && filtro.nombre !== null && filtro.nombre !== '') {
      consulta = consulta.andWhere('grupo.nombre ILIKE :nombre', {
        nombre: filtro.nombre,
      });
      criterioUtilizado = true;
    }
    if (filtro.descripcion && filtro.descripcion !== null) {
      consulta = consulta.andWhere('grupo.descripcion ILIKE :descripcion', {
        descripcion: filtro.descripcion,
      });
      criterioUtilizado = true;
    }

    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<Grupo> {
    let consulta = this.repositorio
      .createQueryBuilder('grupo')
      .leftJoinAndSelect('grupo.listaRol', 'rol')
      .where('grupo.id = :id', { id });
    consulta = consulta.orderBy('grupo.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta ? this.mapper.map(respuesta, GrupoEntity, Grupo) : null;
  }

  async obtenerObjetoPor(
    objeto: GrupoFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Grupo> {
    let consulta = this.repositorio
      .createQueryBuilder('grupo')
      .leftJoinAndSelect('grupo.listaRol', 'rol');

    consulta = this.evaluarCriterios(consulta, objeto, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`grupo.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta ? this.mapper.map(respuesta, GrupoEntity, Grupo) : null;
  }

  async obtenerPor(
    objeto: GrupoFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Grupo>> {
    let consulta = this.repositorio
      .createQueryBuilder('grupo')
      .leftJoinAndSelect('grupo.listaRol', 'rol');

    consulta = this.evaluarCriterios(consulta, objeto, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`grupo.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<Grupo>(
      this.mapper.mapArray(respuesta[0], GrupoEntity, Grupo),
      respuesta[1],
    );
  }

  async guardar(objeto: Grupo, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: GrupoEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(GrupoRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<Grupo>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(GrupoEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(GrupoEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(GrupoRepository.name, error);
        return false;
      });
  }

  async eliminar(id: number, transaccion: QueryRunner): Promise<boolean> {
    return await transaccion.manager
      .delete(GrupoEntity, { id })
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(GrupoRepository.name, error);
        return false;
      });
  }
}

export const GRUPO_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Grupo),
  useClass: GrupoRepository,
};
