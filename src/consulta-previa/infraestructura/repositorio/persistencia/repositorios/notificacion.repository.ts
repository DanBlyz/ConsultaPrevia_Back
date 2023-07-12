
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

import { INotificacionRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { NotificacionEntity } from '../orm';
import { Notificacion } from '../../../../dominio/entidades';
import { NotificacionFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(NotificacionEntity)
export class NotificacionRepository implements INotificacionRepositorio {
  private repositorio: Repository<NotificacionEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(NotificacionEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<NotificacionEntity>,
    filtro: NotificacionFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<NotificacionEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.notificado && filtro.notificado !== '') {
      consulta = consulta.andWhere('notificacion.notificado ILIKE :notificado', {
        notificado: `%${filtro.notificado}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.direccionDpto && filtro.direccionDpto !== '') {
      consulta = consulta.andWhere('notificacion.direccionDpto ILIKE :direccionDpto', {
        direccionDpto: `%${filtro.direccionDpto}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.notificacionPdf && filtro.notificacionPdf !== '') {
      consulta = consulta.andWhere('notificacion.notificacionPdf ILIKE :notificacionPdf', {
        notificacionPdf: `%${filtro.notificacionPdf}%`,
      });
      criterioUtilizado = true;
    }
   
    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<Notificacion> {
    let consulta = this.repositorio
      .createQueryBuilder('notificacion')
     // .leftJoinAndSelect('notificacion.listaReunion', 'notificacionReunion')
      .andWhere('notificacion.id = :id', { id });
    consulta = consulta.orderBy('notificacion.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta,NotificacionEntity, Notificacion)
      : null;
  }

  async obtenerObjetoPor(
    filtro: NotificacionFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Notificacion> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('notificacion')
    //  .leftJoinAndSelect('notificacion.listaReunion', 'notificacionReunion')

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`notificacion.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, NotificacionEntity, Notificacion)
      : null;
  }

  async obtenerPor(
    filtro: NotificacionFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Notificacion>> {
    let consulta = this.repositorio
      .createQueryBuilder('notificacion')
      //.leftJoinAndSelect('Notificacion.hojaRuta', 'hojaRuta')

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`notificacion.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<Notificacion>(
      this.mapper.mapArray(respuesta[0], NotificacionEntity, Notificacion),
      respuesta[1],
    );
  }

  async guardar(objeto: Notificacion, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: NotificacionEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(NotificacionRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<Notificacion>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(NotificacionEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(NotificacionEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(NotificacionRepository.name, error);
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
        .delete(NotificacionEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(NotificacionRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(NotificacionEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(NotificacionEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(NotificacionRepository.name, error);
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

export const NOTIFICACION_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Notificacion),
  useClass: NotificacionRepository,
};
