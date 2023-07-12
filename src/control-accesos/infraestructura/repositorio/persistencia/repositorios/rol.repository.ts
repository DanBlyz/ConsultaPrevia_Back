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

import { IRolRepository } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { RolEntity } from '../orm';
import { Rol } from '../../../../dominio/entidades';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(RolEntity)
export class RolRepository implements IRolRepository {
  private repositorio: Repository<RolEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(RolEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<RolEntity>,
    objeto: Partial<Rol>,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<RolEntity> {
    if (!objeto) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (objeto.codigo && objeto.codigo !== null) {
      consulta = consulta.andWhere('rol.codigo = :codigo', {
        codigo: objeto.codigo,
      });
      criterioUtilizado = true;
    }
    if (objeto.nombre && objeto.nombre !== null) {
      consulta = consulta.andWhere('rol.nombre ILIKE :nombre', {
        nombre: objeto.nombre,
      });
      criterioUtilizado = true;
    }
    if (objeto.grupoId && objeto.grupoId > 0) {
      consulta = consulta.andWhere('rol.grupoId = :grupoId', {
        grupoId: objeto.grupoId,
      });
      criterioUtilizado = true;
    }

    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<Rol> {
    let consulta = this.repositorio
      .createQueryBuilder('rol')
      .leftJoinAndSelect('rol.grupo', 'grupo')
      .where('rol.id = :id', { id });
    consulta = consulta.orderBy('rol.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta ? this.mapper.map(respuesta, RolEntity, Rol) : null;
  }

  async obtenerObjetoPor(
    objeto: Partial<Rol>,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Rol> {
    let consulta = this.repositorio
      .createQueryBuilder('rol')
      .leftJoinAndSelect('rol.grupo', 'grupo');

    consulta = this.evaluarCriterios(consulta, objeto, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`rol.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta ? this.mapper.map(respuesta, RolEntity, Rol) : null;
  }

  async obtenerPor(
    objeto: Partial<Rol>,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Rol>> {
    let consulta = this.repositorio
      .createQueryBuilder('rol')
      .leftJoinAndSelect('rol.grupo', 'grupo');

    consulta = this.evaluarCriterios(consulta, objeto, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`rol.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<Rol>(
      this.mapper.mapArray(respuesta[0], RolEntity, Rol),
      respuesta[1],
    );
  }

  async guardar(objeto: Rol, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: RolEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(RolRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<Rol>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(RolEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(RolEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(RolRepository.name, error);
        return false;
      });
  }

  async eliminar(id: number, transaccion: QueryRunner): Promise<boolean> {
    return await transaccion.manager
      .delete(RolEntity, { id })
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(RolRepository.name, error);
        return false;
      });
  }
}

export const ROL_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Rol),
  useClass: RolRepository,
};
