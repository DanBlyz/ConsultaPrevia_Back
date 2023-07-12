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

import { IPersonaRepositorio } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { PersonaEntity } from '../orm';
import { Persona } from '../../../../dominio/entidades';
import { PersonaFiltro } from '../../../../dominio/entidades/filtros';
import { RepositorioFactory } from '../..';

@Injectable()
@EntityRepository(PersonaEntity)
export class PersonaRepository implements IPersonaRepositorio {
  private repositorio: Repository<PersonaEntity>;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.repositorio = this.conexion.getRepository(PersonaEntity);
  }

  private evaluarCriterios(
    consulta: SelectQueryBuilder<PersonaEntity>,
    filtro: PersonaFiltro,
    nulo: boolean,
    obligatorio: boolean,
  ): SelectQueryBuilder<PersonaEntity> {
    if (!filtro) {
      if (nulo) {
        return consulta;
      } else {
        return null;
      }
    }

    let criterioUtilizado = false;

    if (filtro.codigo && filtro.codigo !== '') {
      consulta = consulta.andWhere('persona.codigo = :codigo', {
        codigo: filtro.codigo,
      });
      criterioUtilizado = true;
    }
    if (filtro.primApellido && filtro.primApellido !== '') {
      consulta = consulta.andWhere('persona.primApellido ILIKE :primApellido', {
        primApellido: `%${filtro.primApellido}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.segApellido && filtro.segApellido !== '') {
      consulta = consulta.andWhere('persona.segApellido ILIKE :segApellido', {
        segApellido: `%${filtro.segApellido}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.nombre && filtro.nombre !== '') {
      consulta = consulta.andWhere('persona.nombre ILIKE :nombre', {
        nombre: `%${filtro.nombre}%`,
      });
      criterioUtilizado = true;
    }
    if (filtro.numDocumento && filtro.numDocumento !== '') {
      consulta = consulta.andWhere('persona.numDocumento = :numDocumento', {
        numDocumento: filtro.numDocumento,
      });
      criterioUtilizado = true;
    }
    if (filtro.expedicion && filtro.expedicion !== '') {
      consulta = consulta.andWhere('persona.expedicion = :expedicion', {
        expedicion: filtro.expedicion,
      });
      criterioUtilizado = true;
    }

    if (filtro.estadoLaboral && filtro.estadoLaboral !== '') {
      consulta = consulta.andWhere('infoLaboral.estado = :estadoLaboral', {
        estadoLaboral: filtro.estadoLaboral,
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

    if (obligatorio) {
      return criterioUtilizado ? consulta : null;
    } else {
      return consulta;
    }
  }

  async obtenerPorId(id: number): Promise<Persona> {
    let consulta = this.repositorio
      .createQueryBuilder('persona')
      .leftJoinAndSelect('persona.fotografia', 'fotografia')
      .leftJoinAndSelect('persona.infoLaboral', 'infoLaboral')
      .leftJoinAndSelect('infoLaboral.uniOrganizacional', 'uniOrganizacional')
      .leftJoinAndSelect('infoLaboral.puesto', 'puesto')
      .leftJoinAndSelect('persona.listaPuestoPersona', 'puestoPersona')
      .leftJoinAndSelect('puestoPersona.puesto', 'puestoPersonaPuesto')
      .leftJoinAndSelect(
        'puestoPersona.uniOrganizacional',
        'puestoPersonaUniOrganizacional',
      )
      .andWhere('persona.id = :id', { id });
    consulta = consulta.orderBy('persona.id', 'DESC');
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, PersonaEntity, Persona)
      : null;
  }

  async obtenerObjetoPor(
    filtro: PersonaFiltro,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Persona> {
    if (!filtro) {
      return null;
    }
    let consulta = this.repositorio
      .createQueryBuilder('persona')
      .leftJoinAndSelect('persona.fotografia', 'fotografia')
      .leftJoinAndSelect('persona.infoLaboral', 'infoLaboral')
      .leftJoinAndSelect('infoLaboral.uniOrganizacional', 'uniOrganizacional')
      .leftJoinAndSelect('infoLaboral.puesto', 'puesto')
      .leftJoinAndSelect('persona.listaPuestoPersona', 'puestoPersona')
      .leftJoinAndSelect('puestoPersona.puesto', 'puestoPersonaPuesto')
      .leftJoinAndSelect(
        'puestoPersona.uniOrganizacional',
        'puestoPersonaUniOrganizacional',
      );

    consulta = this.evaluarCriterios(consulta, filtro, false, true);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`persona.${ordenarPor}`, orden);
    const respuesta = await consulta.getOne();
    return respuesta
      ? this.mapper.map(respuesta, PersonaEntity, Persona)
      : null;
  }

  async obtenerPor(
    filtro: PersonaFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Persona>> {
    let consulta = this.repositorio
      .createQueryBuilder('persona')
      .leftJoinAndSelect('persona.fotografia', 'fotografia')
      .leftJoinAndSelect('persona.infoLaboral', 'infoLaboral')
      .leftJoinAndSelect('infoLaboral.uniOrganizacional', 'uniOrganizacional')
      .leftJoinAndSelect('infoLaboral.puesto', 'puesto')
      .leftJoinAndSelect('persona.listaPuestoPersona', 'puestoPersona')
      .leftJoinAndSelect('puestoPersona.puesto', 'puestoPersonaPuesto')
      .leftJoinAndSelect(
        'puestoPersona.uniOrganizacional',
        'puestoPersonaUniOrganizacional',
      );
    consulta = this.evaluarCriterios(consulta, filtro, true, false);
    if (!consulta) {
      return null;
    }

    consulta = consulta.orderBy(`persona.${ordenarPor}`, orden);
    consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
    const respuesta = await consulta.getManyAndCount();
    return new ListaPaginada<Persona>(
      this.mapper.mapArray(respuesta[0], PersonaEntity, Persona),
      respuesta[1],
    );
  }

  async guardar(objeto: Persona, transaccion: QueryRunner): Promise<number> {
    const objetoEntity: PersonaEntity = await this.repositorio.create(objeto);
    return await transaccion.manager
      .save(objetoEntity, { transaction: false })
      .then((objeto) => objeto.id)
      .catch((error) => {
        RepositorioFactory.registrarError(PersonaRepository.name, error);
        return 0;
      });
  }

  async modificar(
    id: number,
    objeto: Partial<Persona>,
    transaccion: QueryRunner,
  ): Promise<boolean> {
    const objetoEntity = await transaccion.manager.preload(PersonaEntity, {
      id,
      ...objeto,
    });
    return await transaccion.manager
      .update(PersonaEntity, { id }, objetoEntity)
      .then(() => true)
      .catch((error) => {
        RepositorioFactory.registrarError(PersonaRepository.name, error);
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
        .delete(PersonaEntity, { id })
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(PersonaRepository.name, error);
          return false;
        });
    } else {
      const objetoEntity = await transaccion.manager.preload(PersonaEntity, {
        id,
      });
      transaccion.data = { action: 'soft-remove' };
      return await transaccion.manager
        .update(PersonaEntity, { id }, objetoEntity)
        .then(() => true)
        .catch((error) => {
          RepositorioFactory.registrarError(PersonaRepository.name, error);
          return false;
        });
    }
  }
}

export const PERSONA_REPOSITORIO_PROVIDER = {
  provide: getRepositoryToken(Persona),
  useClass: PersonaRepository,
};
