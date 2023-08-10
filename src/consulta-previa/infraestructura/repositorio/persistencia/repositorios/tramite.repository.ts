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

import { ITramiteRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { TramiteEntity } from '../orm';
import { Tramite } from '../../../../dominio/entidades';
import { TramiteFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(TramiteEntity)
export class TramiteRepository implements ITramiteRepositorio {
  private repositorio: Repository<TramiteEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(TramiteEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<TramiteEntity>,
    filtro: TramiteFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<TramiteEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.correlativo && filtro.correlativo !== '') {
      consulta = consulta.andWhere('tramite.correlativo ILIKE :correlativo', {
        correlativo: filtro.correlativo,
      });
      criterioUtilizado = true;
    }
    if (filtro.codigoUnico && filtro.codigoUnico !== 0) {
      consulta = consulta.andWhere('tramite.codigoUnico = :codigoUnico', {
        codigoUnico: filtro.codigoUnico,
      });
      criterioUtilizado = true;
    }
    if (filtro.areaMinera && filtro.areaMinera !== '') {
      consulta = consulta.andWhere('tramite.areaMinera ILIKE :areaMinera', {
        areaMinera: `%${filtro.areaMinera}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.clasificacion && filtro.clasificacion !== '') {
      consulta = consulta.andWhere('tramite.clasificacion ILIKE :clasificacion', {
        clasificacion: `%${filtro.clasificacion}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.departamento && filtro.departamento !== '') {
      consulta = consulta.andWhere('tramite.departamento ILIKE :departamento', {
        departamento: `%${filtro.departamento}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.provincia && filtro.provincia !== '') {
      consulta = consulta.andWhere('tramite.provincia ILIKE :provincia', {
        provincia: filtro.provincia,
      });
      criterioUtilizado = true;
    }
    if (filtro.municipio && filtro.municipio !== '') {
      consulta = consulta.andWhere('tramite.municipio ILIKE :municipio', {
        municipio: `%${filtro.municipio}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.estado && filtro.estado !== '') {
      consulta = consulta.andWhere('tramite.estado ILIKE :estado', {
        estado: `%${filtro.estado}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.estadoAccion && filtro.estadoAccion !== '') {
      consulta = consulta.andWhere('tramite.estadoAccion ILIKE :estadoAccion', {
        estadoAccion: `%${filtro.estadoAccion}%`,
      });
      criterioUtilizado = true;
    }

    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<Tramite> {
    let consulta = this.repositorio
      .createQueryBuilder('tramite')
      .leftJoinAndSelect('tramite.listaResolucion', 'Resolucion')
      .leftJoinAndSelect('tramite.listaProvidencia', 'Providencia')
      .leftJoinAndSelect('tramite.listaInforme', 'Informe')
      .leftJoinAndSelect('Informe.listaSujetoIdentificado', 'SujetoIdentificado')
      .leftJoinAndSelect('tramite.listaNotificacion', 'Notificacion')
      .leftJoinAndSelect('Notificacion.reunion', 'Reunion')
      .leftJoinAndSelect('tramite.listaActoAdministrativo', 'ActoAdministrativo')
      .leftJoinAndSelect('ActoAdministrativo.pagoCpt', 'PagoCpt')
      .leftJoinAndSelect('ActoAdministrativo.viaje', 'Viaje')
      .andWhere('tramite.id = :id', { id });
    consulta = consulta.orderBy('tramite.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta,TramiteEntity, Tramite)
      : null;
  }

  async obtenerObjetoPor(
    filtro: TramiteFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Tramite> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('tramite')
      .leftJoinAndSelect('tramite.listaResolucion', 'Resolucion')
      .leftJoinAndSelect('tramite.listaProvidencia', 'Providencia')
      .leftJoinAndSelect('tramite.listaInforme', 'Informe')
      .leftJoinAndSelect('Informe.listaSujetoIdentificado', 'SujetoIdentificado')
      .leftJoinAndSelect('tramite.listaNotificacion', 'Notificacion')
      .leftJoinAndSelect('Notificacion.reunion', 'Reunion')
      .leftJoinAndSelect('tramite.listaActoAdministrativo', 'ActoAdministrativo')
      .leftJoinAndSelect('ActoAdministrativo.pagoCpt', 'PagoCpt')
      .leftJoinAndSelect('ActoAdministrativo.viaje', 'Viaje')

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`tramite.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, TramiteEntity, Tramite)
      : null;
  }

  async obtenerPor(
    filtro: TramiteFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Tramite>> {
    let consulta = this.repositorio
      .createQueryBuilder('tramite')
      .leftJoinAndSelect('tramite.listaResolucion', 'Resolucion')
      .leftJoinAndSelect('tramite.listaProvidencia', 'Providencia')
      .leftJoinAndSelect('tramite.listaInforme', 'Informe')
      .leftJoinAndSelect('Informe.listaSujetoIdentificado', 'SujetoIdentificado')
      .leftJoinAndSelect('tramite.listaNotificacion', 'Notificacion')
      .leftJoinAndSelect('Notificacion.reunion', 'Reunion')
      .leftJoinAndSelect('tramite.listaActoAdministrativo', 'ActoAdministrativo')
      .leftJoinAndSelect('ActoAdministrativo.pagoCpt', 'PagoCpt')
      .leftJoinAndSelect('ActoAdministrativo.viaje', 'Viaje')
      

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`tramite.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<Tramite>(
      this.mapper.mapArray(respuesta[0], TramiteEntity, Tramite),
      respuesta[1],
    );
  }

  async guardar(objeto: Tramite, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: TramiteEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(TramiteRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<Tramite>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(TramiteEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(TramiteEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(TramiteRepository.name, error);
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
        .delete(TramiteEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(TramiteRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(TramiteEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(TramiteEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(TramiteRepository.name, error);
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

export const TRAMITE_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Tramite),
  useClass: TramiteRepository,
};
