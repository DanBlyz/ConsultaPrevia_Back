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
import * as bcrypt from 'bcrypt';

import { ListaPaginada } from '../../../../../comun/modelos';

import { ICuentaRepository } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { CuentaEntity } from '../orm';
import { Cuenta } from '../../../../dominio/entidades';
import { CuentaFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(CuentaEntity)
export class CuentaRepository implements ICuentaRepository {
  private repositorio: Repository<CuentaEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(CuentaEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<CuentaEntity>,
    filtro: CuentaFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<CuentaEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.codigo && filtro.codigo !== null && filtro.codigo !== '') {
      consulta = consulta.andWhere('cuenta.codigo ILIKE :codigo', {
        codigo: filtro.codigo,
      });
      criterioUtilizado = true;
    }
    if (
      filtro.modoAutenticacion &&
      filtro.modoAutenticacion !== null &&
      filtro.modoAutenticacion !== ''
    ) {
      consulta = consulta.andWhere(
        'cuenta.modoAutenticacion ILIKE :modoAutenticacion',
        {
          modoAutenticacion: filtro.modoAutenticacion,
        },
      );
      criterioUtilizado = true;
    }
    if (filtro.nombre && filtro.nombre !== null && filtro.nombre !== '') {
      consulta = consulta.andWhere('cuenta.nombre ILIKE :nombre', {
        nombre: filtro.nombre,
      });
      criterioUtilizado = true;
    }
    if (filtro.estaAutorizada && filtro.estaAutorizada !== null) {
      consulta = consulta.andWhere('cuenta.estaAutorizada = :estaAutorizada', {
        estaAutorizada: filtro.estaAutorizada,
      });
      criterioUtilizado = true;
    }
    if (filtro.estaBloqueada && filtro.estaBloqueada !== null) {
      consulta = consulta.andWhere('cuenta.estaBloqueada = :estaBloqueada', {
        estaBloqueada: filtro.estaBloqueada,
      });
      criterioUtilizado = true;
    }

    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<Cuenta> {
    let consulta = this.repositorio
      .createQueryBuilder('cuenta')
      .leftJoinAndSelect('cuenta.usuario', 'usuario')
      .leftJoinAndSelect('cuenta.listaRolCuenta', 'rolCuenta')
      .andWhere('cuenta.id = :id', { id });
    consulta = consulta.orderBy('cuenta.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta ? this.mapper.map(respuesta, CuentaEntity, Cuenta) : null;
  }

  async obtenerObjetoPor(
    filtro: CuentaFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Cuenta> {
    let consulta = this.repositorio
      .createQueryBuilder('cuenta')
      .leftJoinAndSelect('cuenta.usuario', 'usuario')
      .leftJoinAndSelect('cuenta.listaRolCuenta', 'rolCuenta');

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`cuenta.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta ? this.mapper.map(respuesta, CuentaEntity, Cuenta) : null;
  }

  async obtenerPor(
    filtro: CuentaFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Cuenta>> {
    let consulta = this.repositorio
      .createQueryBuilder('cuenta')
      .leftJoinAndSelect('cuenta.usuario', 'usuario')
      .leftJoinAndSelect('cuenta.listaRolCuenta', 'rolCuenta');

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`cuenta.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<Cuenta>(
      this.mapper.mapArray(respuesta[0], CuentaEntity, Cuenta),
      respuesta[1],
    );
  }

  async guardar(objeto: Cuenta, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: CuentaEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(CuentaRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<Cuenta>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(CuentaEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(CuentaEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(CuentaRepository.name, error);
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
        .delete(CuentaEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(CuentaRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(CuentaEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(CuentaEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(CuentaRepository.name, error);
          return false;
        });
    }
  }

  async validar(nombre: string, contrasenia: string): Promise<Cuenta> {
    const cuentaEntity: CuentaEntity = await this.repositorio.findOne({
      where: {
        nombre: nombre,
        estaAutorizada: true,
        estaBloqueada: false,
      },
      order: {
        id: 'DESC',
      },
    });
    const cuentaBD = this.mapper.map(cuentaEntity, CuentaEntity, Cuenta);
    if (cuentaBD) {
      const contraseniaValida = await bcrypt.compare(
        contrasenia,
        cuentaBD.contrasenia,
      );
      if (contraseniaValida) {
        return cuentaBD;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  async obtenerPorNombre(nombre: string): Promise<Cuenta> {
    let consulta = this.repositorio
      .createQueryBuilder('cuenta')
      .where('cuenta.nombre = :nombre', { nombre });
    consulta = consulta.orderBy('cuenta.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta ? this.mapper.map(respuesta, CuentaEntity, Cuenta) : null;
  }
}

export const CUENTA_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Cuenta),
  useClass: CuentaRepository,
};
