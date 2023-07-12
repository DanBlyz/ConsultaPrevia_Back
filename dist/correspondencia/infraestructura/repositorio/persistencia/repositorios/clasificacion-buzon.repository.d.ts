import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IClasificacionBuzonRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { ClasificacionBuzon } from '../../../../dominio/entidades';
import { ClasificacionBuzonFiltro } from '../../../../dominio/entidades/filtros';
export declare class ClasificacionBuzonRepository implements IClasificacionBuzonRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<ClasificacionBuzon>;
    obtenerObjetoPor(filtro: ClasificacionBuzonFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ClasificacionBuzon>;
    obtenerPor(filtro: ClasificacionBuzonFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<ClasificacionBuzon>>;
    guardar(objeto: ClasificacionBuzon, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<ClasificacionBuzon>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const CLASIFICACION_BUZON_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof ClasificacionBuzonRepository;
};
