import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IParametroRepositorio } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { Parametro } from '../../../../dominio/entidades';
import { ParametroFiltro } from '../../../../dominio/entidades/filtros';
export declare class ParametroRepository implements IParametroRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Parametro>;
    obtenerObjetoPor(filtro: ParametroFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Parametro>;
    obtenerPor(filtro: ParametroFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Parametro>>;
    guardar(objeto: Parametro, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Parametro>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const PARAMETRO_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof ParametroRepository;
};
