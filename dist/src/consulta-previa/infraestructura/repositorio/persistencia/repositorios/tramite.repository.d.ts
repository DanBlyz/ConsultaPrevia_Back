import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { ITramiteRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Tramite } from '../../../../dominio/entidades';
import { TramiteFiltro } from '../../../../dominio/entidades/filtros';
export declare class TramiteRepository implements ITramiteRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Tramite>;
    obtenerObjetoPor(filtro: TramiteFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Tramite>;
    obtenerPor(filtro: TramiteFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Tramite>>;
    guardar(objeto: Tramite, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Tramite>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const TRAMITE_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof TramiteRepository;
};
