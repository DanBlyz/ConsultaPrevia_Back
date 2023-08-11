
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

import { IDocumentoRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { DocumentoEntity } from '../orm';
import { Documento } from '../../../../dominio/entidades';
import { DocumentoFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(DocumentoEntity)
export class DocumentoRepository implements IDocumentoRepositorio {
  private repositorio: Repository<DocumentoEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(DocumentoEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<DocumentoEntity>,
    filtro: DocumentoFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<DocumentoEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.correlativo && filtro.correlativo !== '') {
      consulta = consulta.andWhere('documento.correlativo ILIKE :correlativo', {
        correlativo: `%${filtro.correlativo}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.referencia && filtro.referencia !== '') {
      consulta = consulta.andWhere('documento.referencia ILIKE :referencia', {
        referencia: `%${filtro.referencia}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.documentoPdf && filtro.documentoPdf !== '') {
      consulta = consulta.andWhere('documento.documentoPdf ILIKE :documentoPdf', {
        documentoPdf: `%${filtro.documentoPdf}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.tipoDocumento && filtro.tipoDocumento !== '') {
        consulta = consulta.andWhere('documento.tipoDocumento ILIKE :tipoDocumento', {
          tipoDocumento: `%${filtro.tipoDocumento}%`,
        });
        criterioUtilizado = true;
    }
    if (filtro.flujo && filtro.flujo !== '') {
        consulta = consulta.andWhere('documento.flujo ILIKE :flujo', {
          flujo: `%${filtro.flujo}%`,
        });
        criterioUtilizado = true;
    }
    if (filtro.tramite && filtro.tramite.correlativo !== '') {
      consulta = consulta.andWhere('tramite.correlativo ILIKE :tramiteCorrelativo', {
        tramiteCorrelativo: `%${filtro.tramite.correlativo}%`,
      });
      criterioUtilizado = true;
    }

    
   
    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<Documento> {
    let consulta = this.repositorio
      .createQueryBuilder('documento')
      .leftJoinAndSelect('documento.tramite', 'tramite')
      .leftJoinAndSelect('documento.listaSujetoIdentificado', 'SujetoIdentificado')
      .andWhere('documento.id = :id', { id });
    consulta = consulta.orderBy('documento.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta,DocumentoEntity, Documento)
      : null;
  }

  async obtenerObjetoPor(
    filtro: DocumentoFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Documento> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('documento')
      .leftJoinAndSelect('documento.tramite', 'tramite')
      .leftJoinAndSelect('documento.listaSujetoIdentificado', 'SujetoIdentificado')

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`documento.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, DocumentoEntity, Documento)
      : null;
  }

  async obtenerPor(
    filtro: DocumentoFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Documento>> {
    let consulta = this.repositorio
      .createQueryBuilder('documento')
      .leftJoinAndSelect('documento.tramite', 'tramite')
      .leftJoinAndSelect('documento.listaSujetoIdentificado', 'SujetoIdentificado')
    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`documento.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<Documento>(
      this.mapper.mapArray(respuesta[0], DocumentoEntity, Documento),
      respuesta[1],
    );
  }

  async guardar(objeto: Documento, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: DocumentoEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(DocumentoRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<Documento>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(DocumentoEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(DocumentoEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(DocumentoRepository.name, error);
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
        .delete(DocumentoEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(DocumentoRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(DocumentoEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(DocumentoEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(DocumentoRepository.name, error);
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

export const DOCUMENTO_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Documento),
  useClass: DocumentoRepository,
};
