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

import { IPuestoRepositorio } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { PuestoEntity } from '../orm';
import { Puesto } from '../../../../dominio/entidades';
import { PuestoFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(PuestoEntity)
export class PuestoRepository implements IPuestoRepositorio {
  private repositorio: Repository<PuestoEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(PuestoEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<PuestoEntity>,
    filtro: PuestoFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<PuestoEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.nombre && filtro.nombre !== '') {
      consulta = consulta.andWhere('puesto.nombre ILIKE :nombre', {
        nombre: `%${filtro.nombre}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.nivelJerarquico && filtro.nivelJerarquico > 0) {
      consulta = consulta.andWhere(
        'puesto.nivelJerarquico = :nivelJerarquico',
        {
          nivelJerarquico: filtro.nivelJerarquico,
        },
      );
      criterioUtilizado = true;
    }
    if (filtro.estaActivo !== null && filtro.estaActivo !== undefined) {
      consulta = consulta.andWhere('puesto.estaActivo = :estaActivo', {
        estaActivo: filtro.estaActivo.valueOf,
      });
      criterioUtilizado = true;
    }
    if (filtro.uniOrganizacionalId && filtro.uniOrganizacionalId > 0) {
      consulta = consulta.andWhere(
        'puesto.uniOrganizacionalId = :uniOrganizacionalId',
        {
          uniOrganizacionalId: filtro.uniOrganizacionalId,
        },
      );
      criterioUtilizado = true;
    }

    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<Puesto> {
    let consulta = this.repositorio
      .createQueryBuilder('puesto')
      .leftJoinAndSelect('puesto.uniOrganizacional', 'uniOrganizacional')
      .leftJoinAndSelect('puesto.listaPuestoPersona', 'puestoPersona')
      .andWhere('puesto.id = :id', { id });
    consulta = consulta.orderBy('puesto.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta ? this.mapper.map(respuesta, PuestoEntity, Puesto) : null;
  }

  async obtenerObjetoPor(
    filtro: PuestoFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Puesto> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('puesto')
      .leftJoinAndSelect('puesto.uniOrganizacional', 'uniOrganizacional')
      .leftJoinAndSelect('puesto.listaPuestoPersona', 'puestoPersona');
    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`puesto.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta ? this.mapper.map(respuesta, PuestoEntity, Puesto) : null;
  }

  async obtenerPor(
    filtro: PuestoFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Puesto>> {
    let consulta = this.repositorio
      .createQueryBuilder('puesto')
      .leftJoinAndSelect('puesto.uniOrganizacional', 'uniOrganizacional')
      .leftJoinAndSelect('puesto.listaPuestoPersona', 'puestoPersona');
    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`puesto.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<Puesto>(
      this.mapper.mapArray(respuesta[0], PuestoEntity, Puesto),
      respuesta[1],
    );
  }

  async guardar(objeto: Puesto, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: PuestoEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(PuestoRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<Puesto>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(PuestoEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(PuestoEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(PuestoRepository.name, error);
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
        .delete(PuestoEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(PuestoRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(PuestoEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(PuestoEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(PuestoRepository.name, error);
          return false;
        });
    }
  }
}

export const PUESTO_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Puesto),
  useClass: PuestoRepository,
};
