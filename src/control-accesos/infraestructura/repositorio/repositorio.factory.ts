import { Injectable, Logger } from '@nestjs/common';
import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

import {
  IRepositorioFactory,
  REPOSITORIO_FACTORY,
} from '../../dominio/contratos/infraestructura/persistencia';
import {
  ICuentaRepository,
  IGrupoRepository,
  IRolCuentaRepository,
  IRolRepository,
  IUsuarioRepository,
} from '../../dominio/contratos/infraestructura/persistencia/repositorios';
import {
  CuentaRepository,
  GrupoRepository,
  RolCuentaRepository,
  RolRepository,
  UsuarioRepository,
} from './persistencia/repositorios';

@Injectable()
export class RepositorioFactory implements IRepositorioFactory {
  public cuentaRepositorio: ICuentaRepository;
  public grupoRepositorio: IGrupoRepository;
  public rolCuentaRepositorio: IRolCuentaRepository;
  public rolRepositorio: IRolRepository;
  public usuarioRepositorio: IUsuarioRepository;

  constructor(
    private conexion: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.cuentaRepositorio = new CuentaRepository(this.conexion, this.mapper);
    this.grupoRepositorio = new GrupoRepository(this.conexion, this.mapper);
    this.rolCuentaRepositorio = new RolCuentaRepository(
      this.conexion,
      this.mapper,
    );
    this.rolRepositorio = new RolRepository(this.conexion, this.mapper);
    this.usuarioRepositorio = new UsuarioRepository(this.conexion, this.mapper);
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
