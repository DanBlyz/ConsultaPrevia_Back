import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IActoAdministrativoRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { ActoAdministrativo } from '../../../../dominio/entidades';
import { ActoAdministrativoFiltro } from '../../../../dominio/entidades/filtros';
export declare class ActoAdministrativoRepository implements IActoAdministrativoRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<ActoAdministrativo>;
    obtenerObjetoPor(filtro: ActoAdministrativoFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ActoAdministrativo>;
    obtenerPor(filtro: ActoAdministrativoFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<ActoAdministrativo>>;
    guardar(objeto: ActoAdministrativo, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<ActoAdministrativo>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const ACTOS_ADMINISTRATIVOS_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof ActoAdministrativoRepository;
};
