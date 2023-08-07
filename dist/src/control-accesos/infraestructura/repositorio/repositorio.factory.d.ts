import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura/persistencia';
import { ICuentaRepository, IGrupoRepository, IRolCuentaRepository, IRolRepository, IUsuarioRepository } from '../../dominio/contratos/infraestructura/persistencia/repositorios';
export declare class RepositorioFactory implements IRepositorioFactory {
    private conexion;
    private readonly mapper;
    cuentaRepositorio: ICuentaRepository;
    grupoRepositorio: IGrupoRepository;
    rolCuentaRepositorio: IRolCuentaRepository;
    rolRepositorio: IRolRepository;
    usuarioRepositorio: IUsuarioRepository;
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
