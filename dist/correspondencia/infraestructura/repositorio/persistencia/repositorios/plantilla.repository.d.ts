import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IPlantillaRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Plantilla } from '../../../../dominio/entidades';
import { PlantillaFiltro } from '../../../../dominio/entidades/filtros';
export declare class PlantillaRepository implements IPlantillaRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Plantilla>;
    obtenerObjetoPor(filtro: PlantillaFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Plantilla>;
    obtenerPor(filtro: PlantillaFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Plantilla>>;
    guardar(objeto: Plantilla, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Plantilla>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const PLANTILLA_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof PlantillaRepository;
};
