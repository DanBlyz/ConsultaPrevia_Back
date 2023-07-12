import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IEtiquetaRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Etiqueta } from '../../../../dominio/entidades';
import { EtiquetaFiltro } from '../../../../dominio/entidades/filtros';
export declare class EtiquetaRepository implements IEtiquetaRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Etiqueta>;
    obtenerObjetoPor(filtro: EtiquetaFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Etiqueta>;
    obtenerPor(filtro: EtiquetaFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Etiqueta>>;
    guardar(objeto: Etiqueta, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Etiqueta>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const ETIQUETA_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof EtiquetaRepository;
};
