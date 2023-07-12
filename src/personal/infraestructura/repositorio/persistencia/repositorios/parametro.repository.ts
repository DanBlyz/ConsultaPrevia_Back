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

import { IParametroRepositorio } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { ParametroEntity } from '../orm';
import { Parametro } from '../../../../dominio/entidades';
import { ParametroFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(ParametroEntity)
export class ParametroRepository implements IParametroRepositorio {
  private repositorio: Repository<ParametroEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(ParametroEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<ParametroEntity>,
    filtro: ParametroFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<ParametroEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.tipo && filtro.tipo !== '') {
      consulta = consulta.andWhere('parametro.tipo ILIKE :tipo', {
        tipo: filtro.tipo,
      });
      criterioUtilizado = true;
    }
    if (filtro.valor && filtro.valor !== '') {
      consulta = consulta.andWhere('parametro.valor ILIKE :valor', {
        valor: filtro.valor,
      });
      criterioUtilizado = true;
    }
    if (filtro.texto && filtro.texto !== '') {
      consulta = consulta.andWhere('parametro.texto ILIKE :texto', {
        texto: filtro.texto,
      });
      criterioUtilizado = true;
    }
    if (filtro.estaActivo !== null && filtro.estaActivo !== undefined) {
      consulta = consulta.andWhere('parametro.estaActivo = :estaActivo', {
        estaActivo: filtro.estaActivo.valueOf,
      });
      criterioUtilizado = true;
    }

    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<Parametro> {
    let consulta = this.repositorio
      .createQueryBuilder('parametro')
      .andWhere('parametro.id = :id', { id });
    consulta = consulta.orderBy('parametro.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, ParametroEntity, Parametro)
      : null;
  }

  async obtenerObjetoPor(
    filtro: ParametroFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Parametro> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio.createQueryBuilder('parametro');

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`parametro.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, ParametroEntity, Parametro)
      : null;
  }

  async obtenerPor(
    filtro: ParametroFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Parametro>> {
    let consulta = this.repositorio.createQueryBuilder('parametro');

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`parametro.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<Parametro>(
      this.mapper.mapArray(respuesta[0], ParametroEntity, Parametro),
      respuesta[1],
    );
  }

  async guardar(objeto: Parametro, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: ParametroEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(ParametroRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<Parametro>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(ParametroEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(ParametroEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(ParametroRepository.name, error);
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
        .delete(ParametroEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(ParametroRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(ParametroEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(ParametroEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(ParametroRepository.name, error);
          return false;
        });
    }
  }
}

export const PARAMETRO_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Parametro),
  useClass: ParametroRepository,
};
