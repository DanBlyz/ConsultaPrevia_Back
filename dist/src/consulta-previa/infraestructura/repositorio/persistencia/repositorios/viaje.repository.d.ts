import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IViajeRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Viaje } from '../../../../dominio/entidades';
import { ViajeFiltro } from '../../../../dominio/entidades/filtros';
export declare class ViajeRepository implements IViajeRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Viaje>;
    obtenerObjetoPor(filtro: ViajeFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Viaje>;
    obtenerPor(filtro: ViajeFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Viaje>>;
    guardar(objeto: Viaje, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Viaje>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const VIAJE_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof ViajeRepository;
};
