import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IPuestoRepositorio } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { Puesto } from '../../../../dominio/entidades';
import { PuestoFiltro } from '../../../../dominio/entidades/filtros';
export declare class PuestoRepository implements IPuestoRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Puesto>;
    obtenerObjetoPor(filtro: PuestoFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Puesto>;
    obtenerPor(filtro: PuestoFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Puesto>>;
    guardar(objeto: Puesto, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Puesto>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const PUESTO_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof PuestoRepository;
};
