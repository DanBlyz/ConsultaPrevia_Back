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

import { IPuestoPersonaRepositorio } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { PuestoPersonaEntity } from '../orm';
import { PuestoPersona } from '../../../../dominio/entidades';
import { PuestoPersonaFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(PuestoPersonaEntity)
export class PuestoPersonaRepository implements IPuestoPersonaRepositorio {
  private repositorio: Repository<PuestoPersonaEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(PuestoPersonaEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<PuestoPersonaEntity>,
    filtro: PuestoPersonaFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<PuestoPersonaEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.tipoMovilidad && filtro.tipoMovilidad !== '') {
      consulta = consulta.andWhere(
        'puestoPersona.tipoMovilidad = :tipoMovilidad',
        {
          tipoMovilidad: filtro.tipoMovilidad,
        },
      );
      criterioUtilizado = true;
    }
    if (filtro.tipoLaboral && filtro.tipoLaboral !== '') {
      consulta = consulta.andWhere('puestoPersona.tipoLaboral = :tipoLaboral', {
        tipoLaboral: filtro.tipoLaboral,
      });
      criterioUtilizado = true;
    }
    if (filtro.esInterinato !== null && filtro.esInterinato !== undefined) {
      consulta = consulta.andWhere(
        'puestoPersona.esInterinato = :esInterinato',
        {
          esInterinato: filtro.esInterinato,
        },
      );
      criterioUtilizado = true;
    }
    if (filtro.estado && filtro.estado !== '') {
      consulta = consulta.andWhere('puestoPersona.estado = :estado', {
        estado: filtro.estado,
      });
      criterioUtilizado = true;
    }
    if (filtro.puestoId && filtro.puestoId > 0) {
      consulta = consulta.andWhere('puestoPersona.puestoId = :puestoId', {
        puestoId: filtro.puestoId,
      });
      criterioUtilizado = true;
    }
    if (filtro.personaId && filtro.personaId > 0) {
      consulta = consulta.andWhere('puestoPersona.personaId = :personaId', {
        personaId: filtro.personaId,
      });
      criterioUtilizado = true;
    }
    if (filtro.uniOrganizacionalId && filtro.uniOrganizacionalId > 0) {
      consulta = consulta.andWhere(
        'puestoPersona.uniOrganizacionalId = :uniOrganizacionalId',
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

  async obtenerPorId(id: number): Promise<PuestoPersona> {
    let consulta = this.repositorio
      .createQueryBuilder('puestoPersona')
      .leftJoinAndSelect('puestoPersona.puesto', 'puesto')
      .leftJoinAndSelect('puestoPersona.uniOrganizacional', 'uniOrganizacional')
      .andWhere('puestoPersona.id = :id', { id });
    consulta = consulta.orderBy('puestoPersona.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, PuestoPersonaEntity, PuestoPersona)
      : null;
  }

  async obtenerObjetoPor(
    filtro: PuestoPersonaFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<PuestoPersona> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('puestoPersona')
      .leftJoinAndSelect('puestoPersona.puesto', 'puesto')
      .leftJoinAndSelect(
        'puestoPersona.uniOrganizacional',
        'uniOrganizacional',
      );
    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`puestoPersona.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, PuestoPersonaEntity, PuestoPersona)
      : null;
  }

  async obtenerPor(
    filtro: PuestoPersonaFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<PuestoPersona>> {
    let consulta = this.repositorio
      .createQueryBuilder('puestoPersona')
      .leftJoinAndSelect('puestoPersona.puesto', 'puesto')
      .leftJoinAndSelect(
        'puestoPersona.uniOrganizacional',
        'uniOrganizacional',
      );
    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`puestoPersona.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<PuestoPersona>(
      this.mapper.mapArray(respuesta[0], PuestoPersonaEntity, PuestoPersona),
      respuesta[1],
    );
  }

  async guardar(
    objeto: PuestoPersona,
    transaccion: QueryRunner,
  ): Promise<number> {
    const objetoEntity: PuestoPersonaEntity = await this.repositorio.create(
      objeto,
    );
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(PuestoPersonaRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<PuestoPersona>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(
      PuestoPersonaEntity,
      {
        id,
        ...objeto,
      },
    );
    return await transaccion.manager
      .update(PuestoPersonaEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(PuestoPersonaRepository.name, error);
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
        .delete(PuestoPersonaEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(
            PuestoPersonaRepository.name,
            error,
          );
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(
        PuestoPersonaEntity,
        {
          id,
        },
      );
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(PuestoPersonaEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(
            PuestoPersonaRepository.name,
            error,
          );
          return false;
        });
    }
  }
}

export const PUESTO_PERSONA_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(PuestoPersona),
  useClass: PuestoPersonaRepository,
};
