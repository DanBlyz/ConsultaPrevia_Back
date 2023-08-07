import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IRolRepository } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { Rol } from '../../../../dominio/entidades';
export declare class RolRepository implements IRolRepository {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Rol>;
    obtenerObjetoPor(objeto: Partial<Rol>, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Rol>;
    obtenerPor(objeto: Partial<Rol>, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Rol>>;
    guardar(objeto: Rol, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Rol>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner): Promise<boolean>;
}
export declare const ROL_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof RolRepository;
};
