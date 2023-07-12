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

import { IUsuarioRepository } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { UsuarioEntity } from '../orm';
import { Usuario } from '../../../../dominio/entidades';
import { UsuarioFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(UsuarioEntity)
export class UsuarioRepository implements IUsuarioRepository {
  private repositorio: Repository<UsuarioEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(UsuarioEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<UsuarioEntity>,
    filtro: UsuarioFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<UsuarioEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.nombre && filtro.nombre !== null && filtro.nombre !== '') {
      consulta = consulta.andWhere('usuario.nombre ILIKE :nombre', {
        nombre: filtro.nombre,
      });
      criterioUtilizado = true;
    }
    if (filtro.apellido && filtro.apellido !== null && filtro.apellido !== '') {
      consulta = consulta.andWhere('usuario.apellido ILIKE :apellido', {
        apellido: filtro.apellido,
      });
      criterioUtilizado = true;
    }
    if (
      filtro.nomPublico &&
      filtro.nomPublico !== null &&
      filtro.nomPublico !== ''
    ) {
      consulta = consulta.andWhere('usuario.nomPublico ILIKE :nomPublico', {
        nomPublico: filtro.nomPublico,
      });
      criterioUtilizado = true;
    }
    if (
      filtro.correoElectronico &&
      filtro.correoElectronico !== null &&
      filtro.correoElectronico !== ''
    ) {
      consulta = consulta.andWhere(
        'usuario.correoElectronico ILIKE :correoElectronico',
        {
          correoElectronico: filtro.correoElectronico,
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

  async obtenerPorId(id: number): Promise<Usuario> {
    let consulta = this.repositorio
      .createQueryBuilder('usuario')
      .leftJoinAndSelect('usuario.cuenta', 'cuenta')
      .andWhere('usuario.id = :id', { id });
    consulta = consulta.orderBy('usuario.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, UsuarioEntity, Usuario)
      : null;
  }

  async obtenerObjetoPor(
    filtro: UsuarioFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Usuario> {
    let consulta = this.repositorio
      .createQueryBuilder('usuario')
      .leftJoinAndSelect('usuario.cuenta', 'cuenta');

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`usuario.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, UsuarioEntity, Usuario)
      : null;
  }

  async obtenerPor(
    filtro: UsuarioFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Usuario>> {
    let consulta = this.repositorio
      .createQueryBuilder('usuario')
      .leftJoinAndSelect('usuario.cuenta', 'cuenta');

    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`usuario.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<Usuario>(
      this.mapper.mapArray(respuesta[0], UsuarioEntity, Usuario),
      respuesta[1],
    );
  }

  async guardar(objeto: Usuario, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: UsuarioEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(UsuarioRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<Usuario>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(UsuarioEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(UsuarioEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(UsuarioRepository.name, error);
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
        .delete(UsuarioEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(UsuarioRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(UsuarioEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(UsuarioEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(UsuarioRepository.name, error);
          return false;
        });
    }
  }
}

export const USUARIO_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Usuario),
  useClass: UsuarioRepository,
};
