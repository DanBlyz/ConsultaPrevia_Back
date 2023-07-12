import { QueryRunner } from 'typeorm';
import { IFotografiaRepositorio, IInfoLaboralRepositorio, IParametroRepositorio, IPersonaRepositorio, IPuestoPersonaRepositorio, IPuestoRepositorio, IUniOrganizacionalRepositorio } from './repositorios';
export declare const REPOSITORIO_FACTORY = "REPOSITORIO_FACTORY";
export interface IRepositorioFactory {
    fotografiaRepositorio: IFotografiaRepositorio;
    infoLaboralRepositorio: IInfoLaboralRepositorio;
    parametroRepositorio: IParametroRepositorio;
    personaRepositorio: IPersonaRepositorio;
    puestoRepositorio: IPuestoRepositorio;
    puestoPersonaRepositorio: IPuestoPersonaRepositorio;
    uniOrganizacionalRepositorio: IUniOrganizacionalRepositorio;
    iniciarTransaccion(): Promise<QueryRunner>;
    confirmar(transaccion: QueryRunner): Promise<void>;
    revertir(transaccion: QueryRunner): Promise<void>;
    liberar(transaccion: QueryRunner): Promise<void>;
}
