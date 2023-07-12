import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IRolCuentaRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { RolCuenta } from '../../../../dominio/entidades';
export declare class RolCuentaRepository implements IRolCuentaRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorCuentaId(cuentaId: number): Promise<RolCuenta[]>;
    obtenerPorGrupo(grupoCodigo: string[], cuentaId: number): Promise<RolCuenta[]>;
    obtenerPorId(id: number): Promise<RolCuenta>;
    obtenerObjetoPor(objeto: Partial<RolCuenta>, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<RolCuenta>;
    obtenerPor(objeto: Partial<RolCuenta>, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<RolCuenta>>;
    guardar(objeto: RolCuenta, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<RolCuenta>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const ROL_CUENTA_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof RolCuentaRepository;
};
