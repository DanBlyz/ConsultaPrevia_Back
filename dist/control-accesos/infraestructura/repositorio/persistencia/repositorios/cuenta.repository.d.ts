import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { ICuentaRepository } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { Cuenta } from '../../../../dominio/entidades';
import { CuentaFiltro } from '../../../../dominio/entidades/filtros';
export declare class CuentaRepository implements ICuentaRepository {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Cuenta>;
    obtenerObjetoPor(filtro: CuentaFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Cuenta>;
    obtenerPor(filtro: CuentaFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Cuenta>>;
    guardar(objeto: Cuenta, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Cuenta>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
    validar(nombre: string, contrasenia: string): Promise<Cuenta>;
    obtenerPorNombre(nombre: string): Promise<Cuenta>;
}
export declare const CUENTA_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof CuentaRepository;
};
