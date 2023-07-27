
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

import { IPagoCptRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { PagoCptEntity } from '../orm';
import { PagoCpt } from '../../../../dominio/entidades';
import { PagoCptFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(PagoCptEntity)
export class PagoCptRepository implements IPagoCptRepositorio {
  private repositorio: Repository<PagoCptEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(PagoCptEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<PagoCptEntity>,
    filtro: PagoCptFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<PagoCptEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.flujo && filtro.flujo !== '') {
      consulta = consulta.andWhere('pagoCpt.flujo ILIKE :flujo', {
        flujo: `%${filtro.flujo}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.diasViaje && filtro.diasViaje !== 0) {
      consulta = consulta.andWhere('pagoCpt.diasViaje = :diasViaje', {
        diasViaje: filtro.diasViaje,
      });
      criterioUtilizado = true;
    }
    if (filtro.tipoViaje && filtro.tipoViaje !== '') {
      consulta = consulta.andWhere('pagoCpt.tipoViaje ILIKE :tipoViaje', {
        tipoViaje: `%${filtro.tipoViaje}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.montoTotal && filtro.montoTotal !== 0) {
      consulta = consulta.andWhere('pagoCpt.montoTotal = :montoTotal', {
        montoTotal: filtro.montoTotal,
      });
      criterioUtilizado = true;
    }
    if (filtro.apm && filtro.apm !== '') {
        consulta = consulta.andWhere('pagoCpt.apm ILIKE :apm', {
          apm: `%${filtro.apm}%`,
        });
        criterioUtilizado = true;
    }
    if (filtro.descripcion && filtro.descripcion !== '') {
        consulta = consulta.andWhere('pagoCpt.descripcion ILIKE :descripcion', {
          descripcion: `%${filtro.descripcion}%`,
        });
        criterioUtilizado = true;
   }
    
   
    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<PagoCpt> {
    let consulta = this.repositorio
      .createQueryBuilder('pagoCpt')
      //.leftJoinAndSelect('PagoCpt.hojaRuta', 'hojaRuta')
      .andWhere('pagoCpt.id = :id', { id });
    consulta = consulta.orderBy('pagoCpt.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta,PagoCptEntity, PagoCpt)
      : null;
  }

  async obtenerObjetoPor(
    filtro: PagoCptFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<PagoCpt> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('pagoCpt')
      //.leftJoinAndSelect('documento.hojaRuta', 'hojaRuta')

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`pagoCpt.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, PagoCptEntity, PagoCpt)
      : null;
  }

  async obtenerPor(
    filtro: PagoCptFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<PagoCpt>> {
    let consulta = this.repositorio
      .createQueryBuilder('pagoCpt')
      //.leftJoinAndSelect('PagoCpt.hojaRuta', 'hojaRuta')

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`pagoCpt.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<PagoCpt>(
      this.mapper.mapArray(respuesta[0], PagoCptEntity, PagoCpt),
      respuesta[1],
    );
  }

  async guardar(objeto: PagoCpt, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: PagoCptEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(PagoCptRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<PagoCpt>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(PagoCptEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(PagoCptEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(PagoCptRepository.name, error);
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
        .delete(PagoCptEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(PagoCptRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(PagoCptEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(PagoCptEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(PagoCptRepository.name, error);
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

export const PAGO_CPT_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(PagoCpt),
  useClass: PagoCptRepository,
};
