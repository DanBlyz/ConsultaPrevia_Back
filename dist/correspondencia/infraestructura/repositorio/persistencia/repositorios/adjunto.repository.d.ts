import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IAdjuntoRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Adjunto } from '../../../../dominio/entidades';
import { AdjuntoFiltro } from '../../../../dominio/entidades/filtros';
export declare class AdjuntoRepository implements IAdjuntoRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Adjunto>;
    obtenerObjetoPor(filtro: AdjuntoFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Adjunto>;
    obtenerPor(filtro: AdjuntoFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Adjunto>>;
    guardar(objeto: Adjunto, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Adjunto>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const ADJUNTO_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof AdjuntoRepository;
};
