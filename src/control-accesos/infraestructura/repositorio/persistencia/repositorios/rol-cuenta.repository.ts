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

import { IRolCuentaRepository } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { RolCuentaEntity } from '../orm';
import { RolCuenta } from '../../../../dominio/entidades';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(RolCuentaEntity)
export class RolCuentaRepository implements IRolCuentaRepository {
  private repositorio: Repository<RolCuentaEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(RolCuentaEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<RolCuentaEntity>,
    objeto: Partial<RolCuenta>,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<RolCuentaEntity> {
    if (!objeto) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (objeto.rolId && objeto.rolId > 0) {
      consulta = consulta.andWhere('rolCuenta.rolId = :rolId', {
        rolId: objeto.rolId,
      });
      criterioUtilizado = true;
    }
    if (objeto.cuentaId && objeto.cuentaId > 0) {
      consulta = consulta.andWhere('rolCuenta.cuentaId = :cuentaId', {
        cuentaId: objeto.cuentaId,
      });
      criterioUtilizado = true;
    }

    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorCuentaId(cuentaId: number): Promise<RolCuenta[]> {
    let consulta = this.repositorio
      .createQueryBuilder('rolCuenta')
      .leftJoinAndSelect('rolCuenta.rol', 'rol')
      .leftJoinAndSelect('rol.grupo', 'grupo')
      .leftJoinAndSelect('rolCuenta.cuenta', 'cuenta')
      .where('rolCuenta.cuentaId = :cuentaId', { cuentaId });
    consulta = consulta.orderBy('rolCuenta.id', 'DESC');
    const respuesta = await consulta.getMany();
    return this.mapper.mapArray(respuesta, RolCuentaEntity, RolCuenta);
  }

  async obtenerPorGrupo(
    grupoCodigo: string[],
    cuentaId: number,
  ): Promise<RolCuenta[]> {
    let consulta = this.repositorio
      .createQueryBuilder('rolCuenta')
      .leftJoinAndSelect('rolCuenta.rol', 'rol')
      .leftJoinAndSelect('rol.grupo', 'grupo')
      .leftJoinAndSelect('rolCuenta.cuenta', 'cuenta')
      .where('rolCuenta.cuentaId = :cuentaId', { cuentaId })
      .andWhere('grupo.codigo IN (:...grupoCodigo)', { grupoCodigo });
    consulta = consulta.orderBy('rolCuenta.id', 'DESC');
    const respuesta = await consulta.getMany();
    return this.mapper.mapArray(respuesta, RolCuentaEntity, RolCuenta);
  }

  async obtenerPorId(id: number): Promise<RolCuenta> {
    let consulta = this.repositorio
      .createQueryBuilder('rolCuenta')
      .leftJoinAndSelect('rolCuenta.rol', 'rol')
      .leftJoinAndSelect('rol.grupo', 'grupo')
      .leftJoinAndSelect('rolCuenta.cuenta', 'cuenta')
      .where('rolCuenta.id = :id', { id });
    consulta = consulta.orderBy('rolCuenta.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, RolCuentaEntity, RolCuenta)
      : null;
  }

  async obtenerObjetoPor(
    objeto: Partial<RolCuenta>,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<RolCuenta> {
    let consulta = this.repositorio.createQueryBuilder('rolCuenta');

    consulta = this.evaluarCriterios(consulta, objeto, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`rolCuenta.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, RolCuentaEntity, RolCuenta)
      : null;
  }

  async obtenerPor(
    objeto: Partial<RolCuenta>,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<RolCuenta>> {
    let consulta = this.repositorio.createQueryBuilder('rolCuenta');

    consulta = this.evaluarCriterios(consulta, objeto, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`rolCuenta.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<RolCuenta>(
      this.mapper.mapArray(respuesta[0], RolCuentaEntity, RolCuenta),
      respuesta[1],
    );
  }

  async guardar(objeto: RolCuenta, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: RolCuentaEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(RolCuentaRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<RolCuenta>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(RolCuentaEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(RolCuentaEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(RolCuentaRepository.name, error);
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
        .delete(RolCuentaEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(RolCuentaRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(RolCuentaEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(RolCuentaEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(RolCuentaRepository.name, error);
          return false;
        });
    }
  }
}

export const ROL_CUENTA_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(RolCuenta),
  useClass: RolCuentaRepository,
};
