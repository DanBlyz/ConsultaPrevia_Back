import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IClasificacionRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Clasificacion } from '../../../../dominio/entidades';
import { ClasificacionFiltro } from '../../../../dominio/entidades/filtros';
export declare class ClasificacionRepository implements IClasificacionRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Clasificacion>;
    obtenerObjetoPor(filtro: ClasificacionFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Clasificacion>;
    obtenerPor(filtro: ClasificacionFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Clasificacion>>;
    guardar(objeto: Clasificacion, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Clasificacion>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const CLASIFICACION_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof ClasificacionRepository;
};
