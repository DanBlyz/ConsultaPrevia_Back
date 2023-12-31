import { QueryRunner } from 'typeorm';
import { ITramiteRepositorio, IInformeRepositorio, ISujetoIdentificadoRepositorio, INotificacionRepositorio, IReunionRepositorio, IResolucionRepositorio, IActoAdministrativoRepositorio, IPagoCptRepositorio, IViajeRepositorio, IProvidenciaRepositorio, IDocumentoRepositorio } from './repositorios';
export declare const REPOSITORIO_FACTORY = "REPOSITORIO_FACTORY";
export interface IRepositorioFactory {
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
    documentoRepositorio: IDocumentoRepositorio;
    iniciarTransaccion(): Promise<QueryRunner>;
    confirmar(transaccion: QueryRunner): Promise<void>;
    revertir(transaccion: QueryRunner): Promise<void>;
    liberar(transaccion: QueryRunner): Promise<void>;
}
