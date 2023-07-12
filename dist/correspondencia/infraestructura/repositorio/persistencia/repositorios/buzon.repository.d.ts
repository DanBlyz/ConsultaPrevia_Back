import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IBuzonRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Buzon } from '../../../../dominio/entidades';
import { BuzonFiltro } from '../../../../dominio/entidades/filtros';
export declare class BuzonRepository implements IBuzonRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Buzon>;
    obtenerObjetoPor(filtro: BuzonFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Buzon>;
    obtenerPor(filtro: BuzonFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Buzon>>;
    guardar(objeto: Buzon, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Buzon>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const BUZON_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof BuzonRepository;
};
