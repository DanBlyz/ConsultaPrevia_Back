import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IPagoCptRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { PagoCpt } from '../../../../dominio/entidades';
import { PagoCptFiltro } from '../../../../dominio/entidades/filtros';
export declare class PagoCptRepository implements IPagoCptRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<PagoCpt>;
    obtenerObjetoPor(filtro: PagoCptFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<PagoCpt>;
    obtenerPor(filtro: PagoCptFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<PagoCpt>>;
    guardar(objeto: PagoCpt, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<PagoCpt>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const PAGO_CPT_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof PagoCptRepository;
};
