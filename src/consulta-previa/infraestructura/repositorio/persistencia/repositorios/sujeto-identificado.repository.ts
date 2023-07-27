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

import { ISujetoIdentificadoRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { SujetoIdentificadoEntity } from '../orm';
import { SujetoIdentificado } from '../../../../dominio/entidades';
import { SujetoIdentificadoFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(SujetoIdentificadoEntity)
export class SujetoIdentificadoRepository implements ISujetoIdentificadoRepositorio {
  private repositorio: Repository<SujetoIdentificadoEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(SujetoIdentificadoEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<SujetoIdentificadoEntity>,
    filtro: SujetoIdentificadoFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<SujetoIdentificadoEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.comunidad && filtro.comunidad !== '') {
      consulta = consulta.andWhere('sujetoIdentificado.comunidad ILIKE :comunidad', {
        comunidad: `%${filtro.comunidad}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.autoridad && filtro.autoridad !== '') {
      consulta = consulta.andWhere('sujetoIdentificado.autoridad ILIKE :autoridad', {
        autoridad: `%${filtro.autoridad}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.telefono && filtro.telefono !== 0) {
      consulta = consulta.andWhere('sujetoIdentificado.telefono ILIKE :telefono', {
        telefono: filtro.telefono,
      });
      criterioUtilizado = true;
    }

    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<SujetoIdentificado> {
    let consulta = this.repositorio
      .createQueryBuilder('sujetoIdentificado')
      .leftJoinAndSelect('sujetoIdentificado.informe', 'Informe')
      .andWhere('sujetoIdentificado.id = :id', { id });
    consulta = consulta.orderBy('sujetoIdentificado.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta,SujetoIdentificadoEntity, SujetoIdentificado)
      : null;
  }

  async obtenerObjetoPor(
    filtro: SujetoIdentificadoFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<SujetoIdentificado> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('sujetoIdentificado')
      .leftJoinAndSelect('sujetoIdentificado.informe', 'Informe')

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`sujetoIdentificado.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, SujetoIdentificadoEntity, SujetoIdentificado)
      : null;
  }

  async obtenerPor(
    filtro: SujetoIdentificadoFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<SujetoIdentificado>> {
    let consulta = this.repositorio
      .createQueryBuilder('sujetoIdentificado')
      .leftJoinAndSelect('sujetoIdentificado.informe', 'Informe')

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`sujetoIdentificado.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<SujetoIdentificado>(
      this.mapper.mapArray(respuesta[0], SujetoIdentificadoEntity, SujetoIdentificado),
      respuesta[1],
    );
  }

  async guardar(objeto: SujetoIdentificado, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: SujetoIdentificadoEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(SujetoIdentificadoRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<SujetoIdentificado>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(SujetoIdentificadoEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(SujetoIdentificadoEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(SujetoIdentificadoRepository.name, error);
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
        .delete(SujetoIdentificadoEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(SujetoIdentificadoRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(SujetoIdentificadoEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(SujetoIdentificadoEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(SujetoIdentificadoRepository.name, error);
          return false;
        });
    }
  }

 /* async obtenerCorrelativo(
    tipoDocumentoId: number,
    gestion: number,
  ): Promise<number> {
    const consulta = await this.repositorio
      .createQueryBuilder('tramite')
      .select('MAX(tramite.numero)', 'maximo')
      .where('documento.tipoDocumentoId = :tipoDocumentoId', {
        tipoDocumentoId,
      })
      .andWhere('documento.gestion = :gestion', { gestion })
      .getRawOne();
    return consulta.maximo ? consulta.maximo + 1 : 1;
  }
  */
}

export const SUJETO_IDENTIFICADO_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(SujetoIdentificado),
  useClass: SujetoIdentificadoRepository,
};
