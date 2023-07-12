import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IUsuarioRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Usuario } from '../../../../dominio/entidades';
import { UsuarioFiltro } from '../../../../dominio/entidades/filtros';
export declare class UsuarioRepository implements IUsuarioRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Usuario>;
    obtenerObjetoPor(filtro: UsuarioFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Usuario>;
    obtenerPor(filtro: UsuarioFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Usuario>>;
    guardar(objeto: Usuario, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Usuario>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const USUARIO_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof UsuarioRepository;
};
