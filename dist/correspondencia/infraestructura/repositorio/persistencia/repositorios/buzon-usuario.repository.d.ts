import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IBuzonUsuarioRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { BuzonUsuario } from '../../../../dominio/entidades';
import { BuzonUsuarioFiltro } from '../../../../dominio/entidades/filtros';
export declare class BuzonUsuarioRepository implements IBuzonUsuarioRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<BuzonUsuario>;
    obtenerObjetoPor(filtro: BuzonUsuarioFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<BuzonUsuario>;
    obtenerPor(filtro: BuzonUsuarioFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<BuzonUsuario>>;
    guardar(objeto: BuzonUsuario, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<BuzonUsuario>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const BUZON_USUARIO_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof BuzonUsuarioRepository;
};
