import { Mapper } from '@automapper/core';
import { HttpService } from '@nestjs/axios';
import { Connection, QueryRunner } from 'typeorm';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { ITramiteRepositorio, IInformeRepositorio, ISujetoIdentificadoRepositorio, INotificacionRepositorio, IReunionRepositorio, IResolucionRepositorio, IActoAdministrativoRepositorio, IPagoCptRepositorio, IViajeRepositorio, IProvidenciaRepositorio } from '../../dominio/contratos/infraestructura/repositorios';
export declare class RepositorioFactory implements IRepositorioFactory {
    private conexion;
    private httpService;
    private readonly mapper;
    tramiteRepositorio: ITramiteRepositorio;
    informeRepositorio: IInformeRepositorio;
    sujetoIdentificadoRepositorio: ISujetoIdentificadoRepositorio;
    notificacionRepositorio: INotificacionRepositorio;
    reunionRepositorio: IReunionRepositorio;
    resolucionRepositorio: IResolucionRepositorio;
    actoAdministrativoRepositorio: IActoAdministrativoRepositorio;
    pagoCptRepositorio: IPagoCptRepositorio;
    viajeRepositorio: IViajeRepositorio;
    providenciaRepositorio: IProvidenciaRepositorio;
    constructor(conexion: Connection, httpService: HttpService, mapper: Mapper);
    iniciarTransaccion(): Promise<QueryRunner>;
    confirmar(transaccion: QueryRunner): Promise<void>;
    revertir(transaccion: QueryRunner): Promise<void>;
    liberar(transaccion: QueryRunner): Promise<void>;
    static registrarError(instancia: string, error: any): void;
}
export declare const REPOSITORIO_FACTORY_PROVIDER: {
    provide: string;
    useClass: typeof RepositorioFactory;
};
