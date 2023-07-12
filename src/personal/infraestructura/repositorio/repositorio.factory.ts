import { Injectable, Logger } from '@nestjs/common';
import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

import {
  IFotografiaRepositorio,
  IInfoLaboralRepositorio,
  IParametroRepositorio,
  IPersonaRepositorio,
  IPuestoPersonaRepositorio,
  IPuestoRepositorio,
  IUniOrganizacionalRepositorio,
} from '../../dominio/contratos/infraestructura/persistencia/repositorios';
import {
  IRepositorioFactory,
  REPOSITORIO_FACTORY,
} from '../../dominio/contratos/infraestructura/persistencia';
import {
  FotografiaRepository,
  InfoLaboralRepository,
  ParametroRepository,
  PersonaRepository,
  PuestoPersonaRepository,
  PuestoRepository,
  UniOrganizacionalRepository,
} from './persistencia/repositorios';

@Injectable()
export class RepositorioFactory implements IRepositorioFactory {
  public fotografiaRepositorio: IFotografiaRepositorio;
  public infoLaboralRepositorio: IInfoLaboralRepositorio;
  public parametroRepositorio: IParametroRepositorio;
  public personaRepositorio: IPersonaRepositorio;
  public puestoRepositorio: IPuestoRepositorio;
  public puestoPersonaRepositorio: IPuestoPersonaRepositorio;
  public uniOrganizacionalRepositorio: IUniOrganizacionalRepositorio;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.fotografiaRepositorio = new FotografiaRepository(
      this.conexion,
      this.mapper,
    );
    this.infoLaboralRepositorio = new InfoLaboralRepository(
      this.conexion,
      this.mapper,
    );
    this.parametroRepositorio = new ParametroRepository(
      this.conexion,
      this.mapper,
    );
    this.personaRepositorio = new PersonaRepository(this.conexion, this.mapper);
    this.puestoRepositorio = new PuestoRepository(this.conexion, this.mapper);
    this.puestoPersonaRepositorio = new PuestoPersonaRepository(
      this.conexion,
      this.mapper,
    );
    this.uniOrganizacionalRepositorio = new UniOrganizacionalRepository(
      this.conexion,
      this.mapper,
    );
  }

  async iniciarTransaccion(): Promise<QueryRunner> {
    const transaccion = this.conexion.createQueryRunner();
    transaccion.startTransaction();
    return transaccion;
  }

  async confirmar(transaccion: QueryRunner): Promise<void> {
    await transaccion.commitTransaction();
  }

  async revertir(transaccion: QueryRunner): Promise<void> {
    await transaccion.rollbackTransaction();
  }

  async liberar(transaccion: QueryRunner): Promise<void> {
    await transaccion.release();
  }

  static registrarError(instancia: string, error: any) {
    const logger = new Logger(instancia);

    /*if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }*/
    logger.error(error);
    /*throw new InternalServerErrorException(
      'Error inesperado, verifique los registros de seguimiento del servidor',
    );*/
  }
}

export const REPOSITORIO_FACTORY_PROVIDER = {
  provide: REPOSITORIO_FACTORY,
  useClass: RepositorioFactory,
};
