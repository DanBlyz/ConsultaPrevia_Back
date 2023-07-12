import { Injectable } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection, EntityRepository, QueryRunner, Repository } from 'typeorm';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

import { IFotografiaRepositorio } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { FotografiaEntity } from '../orm';
import { Fotografia } from '../../../../dominio/entidades';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(FotografiaEntity)
export class FotografiaRepository implements IFotografiaRepositorio {
  private repositorio: Repository<FotografiaEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(FotografiaEntity);
  }

  async obtenerPorId(id: number): Promise<Fotografia> {
    let consulta = this.repositorio
      .createQueryBuilder('fotografia')
      .andWhere('fotografia.id = :id', { id });
    consulta = consulta.orderBy('fotografia.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, FotografiaEntity, Fotografia)
      : null;
  }

  async guardar(objeto: Fotografia, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: FotografiaEntity = await this.repositorio.create(
      objeto,
    );
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(FotografiaRepository.name, error);
        return 0;
      });
  }

  async eliminar(
    id: number,
    transaccion: QueryRunner,
    borradoFisico = false,
  ): Promise<boolean> {
    if (borradoFisico) {
      return await transaccion.manager
        .delete(FotografiaEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(FotografiaRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(FotografiaEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(FotografiaEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(FotografiaRepository.name, error);
          return false;
        });
    }
  }
}

export const FOTOGRAFIA_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Fotografia),
  useClass: FotografiaRepository,
};
