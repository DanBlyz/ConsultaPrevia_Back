import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { ISeguimientoRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Seguimiento } from '../../../../dominio/entidades';
import { SeguimientoFiltro } from '../../../../dominio/entidades/filtros';
export declare class SeguimientoRepository implements ISeguimientoRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Seguimiento>;
    obtenerObjetoPor(filtro: SeguimientoFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Seguimiento>;
    obtenerPor(filtro: SeguimientoFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Seguimiento>>;
    guardar(objeto: Seguimiento, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Seguimiento>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const SEGUIMIENTO_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof SeguimientoRepository;
};
