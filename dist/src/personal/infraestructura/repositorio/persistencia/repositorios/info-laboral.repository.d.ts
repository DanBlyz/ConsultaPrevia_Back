import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IInfoLaboralRepositorio } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { InfoLaboral } from '../../../../dominio/entidades';
export declare class InfoLaboralRepository implements IInfoLaboralRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<InfoLaboral>;
    obtenerObjetoPor(filtro: Partial<InfoLaboral>, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<InfoLaboral>;
    obtenerPor(filtro: Partial<InfoLaboral>, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<InfoLaboral>>;
    guardar(objeto: InfoLaboral, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<InfoLaboral>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const INFO_LABORAL_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof InfoLaboralRepository;
};
