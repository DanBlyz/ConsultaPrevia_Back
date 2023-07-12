import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IPruebaRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Prueba } from '../../../../dominio/entidades';
import { PruebaFiltro } from '../../../../dominio/entidades/filtros';
export declare class PruebaRepository implements IPruebaRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Prueba>;
    obtenerObjetoPor(filtro: PruebaFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Prueba>;
    obtenerPor(filtro: PruebaFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Prueba>>;
    guardar(objeto: Prueba, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Prueba>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const PRUEBA_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof PruebaRepository;
};
