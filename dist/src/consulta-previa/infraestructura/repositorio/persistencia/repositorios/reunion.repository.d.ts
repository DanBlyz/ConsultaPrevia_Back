import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IReunionRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Reunion } from '../../../../dominio/entidades';
import { ReunionFiltro } from '../../../../dominio/entidades/filtros';
export declare class ReunionRepository implements IReunionRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Reunion>;
    obtenerObjetoPor(filtro: ReunionFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Reunion>;
    obtenerPor(filtro: ReunionFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Reunion>>;
    guardar(objeto: Reunion, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Reunion>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const REUNION_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof ReunionRepository;
};
