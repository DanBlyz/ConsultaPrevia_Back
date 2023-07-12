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

import { IUniOrganizacionalRepositorio } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { UniOrganizacionalEntity } from '../orm';
import { UniOrganizacional } from '../../../../dominio/entidades';
import { UniOrganizacionalFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(UniOrganizacionalEntity)
export class UniOrganizacionalRepository
  implements IUniOrganizacionalRepositorio
{
  private repositorio: Repository<UniOrganizacionalEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(UniOrganizacionalEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<UniOrganizacionalEntity>,
    filtro: UniOrganizacionalFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<UniOrganizacionalEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.codigo && filtro.codigo !== '') {
      consulta = consulta.andWhere('uniOrganizacional.codigo = :codigo', {
        codigo: filtro.codigo,
      });
      criterioUtilizado = true;
    }
    if (filtro.sigla && filtro.sigla !== '') {
      consulta = consulta.andWhere('uniOrganizacional.sigla = :sigla', {
        sigla: filtro.sigla,
      });
      criterioUtilizado = true;
    }
    if (filtro.nombre && filtro.nombre !== '') {
      consulta = consulta.andWhere('uniOrganizacional.nombre ILIKE :nombre', {
        nombre: `%${filtro.nombre}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.estaActiva !== null && filtro.estaActiva !== undefined) {
      consulta = consulta.andWhere(
        'uniOrganizacional.estaActiva = :estaActiva',
        {
          estaActiva: filtro.estaActiva.valueOf,
        },
      );
      criterioUtilizado = true;
    }
    if (
      filtro.uniOrganizacionalSuperiorId &&
      filtro.uniOrganizacionalSuperiorId > 0
    ) {
      consulta = consulta.andWhere(
        'uniOrganizacional.uniOrganizacionalSuperiorId = :uniOrganizacionalSuperiorId',
        {
          uniOrganizacionalSuperiorId: filtro.uniOrganizacionalSuperiorId,
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

  /*async obtenerPorId(id: number): Promise<UniOrganizacional> {
    let consulta = this.repositorio
      .createQueryBuilder('uniOrganizacional')
      .leftJoinAndSelect(
        'uniOrganizacional.uniOrganizacionalSuperior',
        'uniOrganizacionalSuperior',
      )
      .leftJoinAndSelect('uniOrganizacional.listaPuesto', 'puesto')
      .andWhere('uniOrganizacional.id = :id', { id });
    consulta = consulta.orderBy('uniOrganizacional.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, UniOrganizacionalEntity, UniOrganizacional)
      : null;
  }*/

  async obtenerPorId(id: number): Promise<UniOrganizacional> {
    let consulta = this.repositorio
      .createQueryBuilder('uniOrganizacional')
      .andWhere('uniOrganizacional.id = :id', { id });
    consulta = consulta.orderBy('uniOrganizacional.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, UniOrganizacionalEntity, UniOrganizacional)
      : null;
  }

  /*async obtenerObjetoPor(
    filtro: UniOrganizacionalFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<UniOrganizacional> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('uniOrganizacional')
      .leftJoinAndSelect(
        'uniOrganizacional.uniOrganizacionalSuperior',
        'uniOrganizacionalSuperior',
      )
      .leftJoinAndSelect('uniOrganizacional.listaPuesto', 'puesto');

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`uniOrganizacional.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, UniOrganizacionalEntity, UniOrganizacional)
      : null;
  }*/

  async obtenerObjetoPor(
    filtro: UniOrganizacionalFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<UniOrganizacional> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio.createQueryBuilder('uniOrganizacional');

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`uniOrganizacional.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, UniOrganizacionalEntity, UniOrganizacional)
      : null;
  }

  /*async obtenerPor(
    filtro: UniOrganizacionalFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<UniOrganizacional>> {
    let consulta = this.repositorio
      .createQueryBuilder('uniOrganizacional')
      .leftJoinAndSelect(
        'uniOrganizacional.uniOrganizacionalSuperior',
        'uniOrganizacionalSuperior',
      )
      .leftJoinAndSelect('uniOrganizacional.listaPuesto', 'puesto');

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`uniOrganizacional.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<UniOrganizacional>(
      this.mapper.mapArray(
        respuesta[0],
        UniOrganizacionalEntity,
        UniOrganizacional,
      ),
      respuesta[1],
    );
  }*/

  async obtenerPor(
    filtro: UniOrganizacionalFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<UniOrganizacional>> {
    let consulta = this.repositorio.createQueryBuilder('uniOrganizacional');

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`uniOrganizacional.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<UniOrganizacional>(
      this.mapper.mapArray(
        respuesta[0],
        UniOrganizacionalEntity,
        UniOrganizacional,
      ),
      respuesta[1],
    );
  }

  async guardar(
    objeto: UniOrganizacional,
    transaccion: QueryRunner,
  ): Promise<number> {
    const objetoEntity: UniOrganizacionalEntity = await this.repositorio.create(
      objeto,
    );
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(
          UniOrganizacionalRepository.name,
          error,
        );
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<UniOrganizacional>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(
      UniOrganizacionalEntity,
      {
        id,
        ...objeto,
      },
    );
    return await transaccion.manager
      .update(UniOrganizacionalEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(
          UniOrganizacionalRepository.name,
          error,
        );
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
        .delete(UniOrganizacionalEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(
            UniOrganizacionalRepository.name,
            error,
          );
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(
        UniOrganizacionalEntity,
        {
          id,
        },
      );
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(UniOrganizacionalEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(
            UniOrganizacionalRepository.name,
            error,
          );
          return false;
        });
    }
  }
}

export const UNI_ORGANIZACIONAL_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(UniOrganizacional),
  useClass: UniOrganizacionalRepository,
};
