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

import { IInfoLaboralRepositorio } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { InfoLaboralEntity } from '../orm';
import { InfoLaboral } from '../../../../dominio/entidades';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(InfoLaboralEntity)
export class InfoLaboralRepository implements IInfoLaboralRepositorio {
  private repositorio: Repository<InfoLaboralEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(InfoLaboralEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<InfoLaboralEntity>,
    filtro: Partial<InfoLaboral>,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<InfoLaboralEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.tipoLaboral && filtro.tipoLaboral !== '') {
      consulta = consulta.andWhere('infoLaboral.tipoLaboral = :tipoLaboral', {
        tipoLaboral: filtro.tipoLaboral,
      });
      criterioUtilizado = true;
    }
    if (filtro.correoInstitucional && filtro.correoInstitucional !== '') {
      consulta = consulta.andWhere(
        'infoLaboral.correoInstitucional = :correoInstitucional',
        {
          correoInstitucional: filtro.correoInstitucional,
        },
      );
      criterioUtilizado = true;
    }
    if (filtro.numInterno && filtro.numInterno !== '') {
      consulta = consulta.andWhere('infoLaboral.numInterno = :numInterno', {
        numInterno: filtro.numInterno,
      });
      criterioUtilizado = true;
    }
    if (filtro.estado && filtro.estado !== '') {
      consulta = consulta.andWhere('infoLaboral.estado = :estado', {
        estado: filtro.estado,
      });
      criterioUtilizado = true;
    }
    if (filtro.uniOrganizacionalId && filtro.uniOrganizacionalId > 0) {
      consulta = consulta.andWhere(
        'infoLaboral.uniOrganizacionalId = :uniOrganizacionalId',
        {
          uniOrganizacionalId: filtro.uniOrganizacionalId,
        },
      );
      criterioUtilizado = true;
    }
    if (filtro.puestoId && filtro.puestoId > 0) {
      consulta = consulta.andWhere('infoLaboral.puestoId = :puestoId', {
        puestoId: filtro.puestoId.valueOf,
      });
      criterioUtilizado = true;
    }

    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<InfoLaboral> {
    let consulta = this.repositorio
      .createQueryBuilder('infoLaboral')
      //.leftJoinAndSelect('infoLaboral.puesto', 'puesto')
      //.leftJoinAndSelect('infoLaboral.uniOrganizacional', 'uniOrganizacional')
      .andWhere('infoLaboral.id = :id', { id });
    consulta = consulta.orderBy('infoLaboral.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, InfoLaboralEntity, InfoLaboral)
      : null;
  }

  async obtenerObjetoPor(
    filtro: Partial<InfoLaboral>,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<InfoLaboral> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('infoLaboral')
      .leftJoinAndSelect('infoLaboral.puesto', 'puesto')
      .leftJoinAndSelect('infoLaboral.uniOrganizacional', 'uniOrganizacional');

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`infoLaboral.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, InfoLaboralEntity, InfoLaboral)
      : null;
  }

  async obtenerPor(
    filtro: Partial<InfoLaboral>,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<InfoLaboral>> {
    let consulta = this.repositorio
      .createQueryBuilder('infoLaboral')
      .leftJoinAndSelect('infoLaboral.puesto', 'puesto')
      .leftJoinAndSelect('infoLaboral.uniOrganizacional', 'uniOrganizacional');

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`infoLaboral.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<InfoLaboral>(
      this.mapper.mapArray(respuesta[0], InfoLaboralEntity, InfoLaboral),
      respuesta[1],
    );
  }

  async guardar(
    objeto: InfoLaboral,
    transaccion: QueryRunner,
  ): Promise<number> {
    const objetoEntity: InfoLaboralEntity = await this.repositorio.create(
      objeto,
    );
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(InfoLaboralRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<InfoLaboral>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(InfoLaboralEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(InfoLaboralEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(InfoLaboralRepository.name, error);
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
        .delete(InfoLaboralEntity, { id })
        .then(() => true)
        .catch((error) => {
          throw error;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(
        InfoLaboralEntity,
        { id },
      );
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(InfoLaboralEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          throw error;
        });
    }
  }
}

export const INFO_LABORAL_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(InfoLaboral),
  useClass: InfoLaboralRepository,
};
