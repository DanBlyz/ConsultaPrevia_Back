import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Connection, QueryRunner } from 'typeorm';

import {
  IRepositorioFactory,
  REPOSITORIO_FACTORY,
} from '../../dominio/contratos/infraestructura';
import {
  ITramiteRepositorio,
  IInformeRepositorio,
  ISujetoIdentificadoRepositorio,
  INotificacionRepositorio,
  IReunionRepositorio,
  IResolucionRepositorio,
  IActoAdministrativoRepositorio,
  IPagoCptRepositorio,
  IViajeRepositorio,
  IProvidenciaRepositorio,
} from '../../dominio/contratos/infraestructura/repositorios';
import {
  PersonaRepositorio,
  PuestoRepositorio,
  UniOrganizacionalRepositorio,
} from './cliente/personal';
import {
  TramiteRepository,
  InformeRepository,
  SujetoIdentificadoRepository,
  NotificacionRepository,
  ReunionRepository,
  ResolucionRepository,
  ActoAdministrativoRepository,
  PagoCptRepository,
  ViajeRepository,
  ProvidenciaRepository,

} from './persistencia/repositorios';

@Injectable()
export class RepositorioFactory implements IRepositorioFactory {
  public tramiteRepositorio: ITramiteRepositorio;
  public informeRepositorio: IInformeRepositorio;
  public sujetoIdentificadoRepositorio: ISujetoIdentificadoRepositorio;
  public notificacionRepositorio: INotificacionRepositorio;
  public reunionRepositorio: IReunionRepositorio;
  public resolucionRepositorio: IResolucionRepositorio;
  public actoAdministrativoRepositorio: IActoAdministrativoRepositorio;
  public pagoCptRepositorio: IPagoCptRepositorio;
  public viajeRepositorio: IViajeRepositorio;
  public providenciaRepositorio: IProvidenciaRepositorio;

  constructor(
    private conexion: Connection,
    private httpService: HttpService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    this.tramiteRepositorio = new TramiteRepository(
      this.conexion,
      this.mapper,
    );
    this.informeRepositorio = new InformeRepository(
      this.conexion,
      this.mapper,
    );
    this.sujetoIdentificadoRepositorio = new SujetoIdentificadoRepository(
      this.conexion,
      this.mapper,
    );
    this.notificacionRepositorio = new NotificacionRepository(
      this.conexion,
      this.mapper,
    );
    this.reunionRepositorio = new ReunionRepository(
      this.conexion,
      this.mapper,
    );
    this.resolucionRepositorio = new ResolucionRepository(
      this.conexion,
      this.mapper,
    );
    this.actoAdministrativoRepositorio = new ActoAdministrativoRepository(
      this.conexion,
      this.mapper,
    );
    this.pagoCptRepositorio = new PagoCptRepository(
      this.conexion,
      this.mapper,
    );
    this.viajeRepositorio = new ViajeRepository(
      this.conexion,
      this.mapper,
    );
    this.providenciaRepositorio = new ProvidenciaRepository(
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
