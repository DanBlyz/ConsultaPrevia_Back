
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

import { IInformeRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { InformeEntity } from '../orm';
import { Informe } from '../../../../dominio/entidades';
import { InformeFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(InformeEntity)
export class InformeRepository implements IInformeRepositorio {
  private repositorio: Repository<InformeEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(InformeEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<InformeEntity>,
    filtro: InformeFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<InformeEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.correlativo && filtro.correlativo !== '') {
      consulta = consulta.andWhere('informe.correlativo ILIKE :correlativo', {
        correlativo: `%${filtro.correlativo}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.referencia && filtro.referencia !== '') {
      consulta = consulta.andWhere('informe.referencia ILIKE :referencia', {
        referencia: `%${filtro.referencia}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.informePdf && filtro.informePdf !== '') {
      consulta = consulta.andWhere('informe.informePdf ILIKE :informePdf', {
        informePdf: `%${filtro.informePdf}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.tipoDocumento && filtro.tipoDocumento !== '') {
      consulta = consulta.andWhere('informe.tipoDocumento ILIKE :tipoDocumento', {
        tipoDocumento: `%${filtro.tipoDocumento}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.flujo && filtro.flujo !== '') {
      consulta = consulta.andWhere('informe.flujo ILIKE :flujo', {
        flujo: `%${filtro.flujo}%`,
      });
      criterioUtilizado = true;
    }
   
    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<Informe> {
    let consulta = this.repositorio
      .createQueryBuilder('informe')
      .leftJoinAndSelect('informe.listaSujetoIdentificado', 'informeSujetoIdentificado')
      .andWhere('informe.id = :id', { id });
    consulta = consulta.orderBy('informe.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta,InformeEntity, Informe)
      : null;
  }

  async obtenerObjetoPor(
    filtro: InformeFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Informe> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('informe')
      .leftJoinAndSelect('informe.listaSujetoIdentificado', 'informeSujetoIdentificado')

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`informe.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, InformeEntity, Informe)
      : null;
  }

  async obtenerPor(
    filtro: InformeFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Informe>> {
    let consulta = this.repositorio
      .createQueryBuilder('informe')
      .leftJoinAndSelect('informe.listaSujetoIdentificado', 'informeSujetoIdentificado')

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`informe.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<Informe>(
      this.mapper.mapArray(respuesta[0], InformeEntity, Informe),
      respuesta[1],
    );
  }

  async guardar(objeto: Informe, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: InformeEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(InformeRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<Informe>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(InformeEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(InformeEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(InformeRepository.name, error);
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
        .delete(InformeEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(InformeRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(InformeEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(InformeEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(InformeRepository.name, error);
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

export const INFORME_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Informe),
  useClass: InformeRepository,
};
