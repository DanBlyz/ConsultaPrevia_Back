import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { IFotografiaRepositorio, IInfoLaboralRepositorio, IParametroRepositorio, IPersonaRepositorio, IPuestoPersonaRepositorio, IPuestoRepositorio, IUniOrganizacionalRepositorio } from '../../dominio/contratos/infraestructura/persistencia/repositorios';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura/persistencia';
export declare class RepositorioFactory implements IRepositorioFactory {
    private conexion;
    private readonly mapper;
    fotografiaRepositorio: IFotografiaRepositorio;
    infoLaboralRepositorio: IInfoLaboralRepositorio;
    parametroRepositorio: IParametroRepositorio;
    personaRepositorio: IPersonaRepositorio;
    puestoRepositorio: IPuestoRepositorio;
    puestoPersonaRepositorio: IPuestoPersonaRepositorio;
    uniOrganizacionalRepositorio: IUniOrganizacionalRepositorio;
    constructor(conexion: Connection, mapper: Mapper);
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
