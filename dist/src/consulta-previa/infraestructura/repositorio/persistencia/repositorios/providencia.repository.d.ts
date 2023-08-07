import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IProvidenciaRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Providencia } from '../../../../dominio/entidades';
import { ProvidenciaFiltro } from '../../../../dominio/entidades/filtros';
export declare class ProvidenciaRepository implements IProvidenciaRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Providencia>;
    obtenerObjetoPor(filtro: ProvidenciaFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Providencia>;
    obtenerPor(filtro: ProvidenciaFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Providencia>>;
    guardar(objeto: Providencia, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Providencia>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const PROVIDENCIA_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof ProvidenciaRepository;
};
