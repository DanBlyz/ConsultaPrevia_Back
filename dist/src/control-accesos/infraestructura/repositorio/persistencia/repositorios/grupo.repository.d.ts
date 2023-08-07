import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IGrupoRepository } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { Grupo } from '../../../../dominio/entidades';
import { GrupoFiltro } from '../../../../dominio/entidades/filtros';
export declare class GrupoRepository implements IGrupoRepository {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Grupo>;
    obtenerObjetoPor(objeto: GrupoFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Grupo>;
    obtenerPor(objeto: GrupoFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Grupo>>;
    guardar(objeto: Grupo, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Grupo>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner): Promise<boolean>;
}
export declare const GRUPO_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof GrupoRepository;
};
