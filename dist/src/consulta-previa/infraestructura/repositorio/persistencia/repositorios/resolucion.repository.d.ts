import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IResolucionRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Resolucion } from '../../../../dominio/entidades';
import { ResolucionFiltro } from '../../../../dominio/entidades/filtros';
export declare class ResolucionRepository implements IResolucionRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Resolucion>;
    obtenerObjetoPor(filtro: ResolucionFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Resolucion>;
    obtenerPor(filtro: ResolucionFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Resolucion>>;
    guardar(objeto: Resolucion, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Resolucion>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const RESOLUCION_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof ResolucionRepository;
};
