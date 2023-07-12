
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

import { IViajeRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { ViajeEntity } from '../orm';
import { Viaje } from '../../../../dominio/entidades';
import { ViajeFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(ViajeEntity)
export class ViajeRepository implements IViajeRepositorio {
  private repositorio: Repository<ViajeEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(ViajeEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<ViajeEntity>,
    filtro: ViajeFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<ViajeEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.fechaInicio && filtro.fechaInicio !== null) {
      consulta = consulta.andWhere('viaje.fechaInicio = :fechaInicio', {
        fechaInicio: `%${filtro.fechaInicio}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.fechaFin && filtro.fechaFin !== null) {
      consulta = consulta.andWhere('viaje.fechaFin = :fechaFin', {
        fechaFin: `%${filtro.fechaFin}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.descripcion && filtro.descripcion !== '') {
      consulta = consulta.andWhere('viaje.descripcion ILIKE :descripcion', {
        descripcion: `%${filtro.descripcion}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.nroFormulario && filtro.nroFormulario !== '') {
      consulta = consulta.andWhere('viaje.nroFormulario ILIKE :nroFormulario', {
        nroFormulario: `%${filtro.nroFormulario}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.formularioPdf && filtro.formularioPdf !== '') {
      consulta = consulta.andWhere('viaje.formularioPdf ILIKE :formularioPdf', {
        formularioPdf: `%${filtro.formularioPdf}%`,
      });
      criterioUtilizado = true;
    }
   
    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<Viaje> {
    let consulta = this.repositorio
      .createQueryBuilder('viaje')
      //.leftJoinAndSelect('Viaje.hojaRuta', 'hojaRuta')
      .andWhere('viaje.id = :id', { id });
    consulta = consulta.orderBy('viaje.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta,ViajeEntity, Viaje)
      : null;
  }

  async obtenerObjetoPor(
    filtro: ViajeFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Viaje> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('viaje')
      //.leftJoinAndSelect('documento.hojaRuta', 'hojaRuta')

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`viaje.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, ViajeEntity, Viaje)
      : null;
  }

  async obtenerPor(
    filtro: ViajeFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Viaje>> {
    let consulta = this.repositorio
      .createQueryBuilder('viaje')
      //.leftJoinAndSelect('Viaje.hojaRuta', 'hojaRuta')

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`viaje.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<Viaje>(
      this.mapper.mapArray(respuesta[0], ViajeEntity, Viaje),
      respuesta[1],
    );
  }

  async guardar(objeto: Viaje, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: ViajeEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(ViajeRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<Viaje>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(ViajeEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(ViajeEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(ViajeRepository.name, error);
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
        .delete(ViajeEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(ViajeRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(ViajeEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(ViajeEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(ViajeRepository.name, error);
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

export const VIAJE_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Viaje),
  useClass: ViajeRepository,
};
