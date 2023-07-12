import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IContenidoRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Contenido } from '../../../../dominio/entidades';
import { ContenidoFiltro } from '../../../../dominio/entidades/filtros';
export declare class ContenidoRepository implements IContenidoRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Contenido>;
    obtenerObjetoPor(filtro: ContenidoFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Contenido>;
    obtenerPor(filtro: ContenidoFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Contenido>>;
    guardar(objeto: Contenido, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Contenido>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const CONTENIDO_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof ContenidoRepository;
};
