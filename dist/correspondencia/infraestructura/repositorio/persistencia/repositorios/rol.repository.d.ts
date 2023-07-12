import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IRolRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Rol } from '../../../../dominio/entidades';
import { RolFiltro } from '../../../../dominio/entidades/filtros';
export declare class RolRepository implements IRolRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Rol>;
    obtenerObjetoPor(filtro: RolFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Rol>;
    obtenerPor(filtro: RolFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Rol>>;
    guardar(objeto: Rol, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Rol>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const ROL_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof RolRepository;
};
