import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IInformeRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Informe } from '../../../../dominio/entidades';
import { InformeFiltro } from '../../../../dominio/entidades/filtros';
export declare class InformeRepository implements IInformeRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Informe>;
    obtenerObjetoPor(filtro: InformeFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Informe>;
    obtenerPor(filtro: InformeFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Informe>>;
    guardar(objeto: Informe, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Informe> | any, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const INFORME_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof InformeRepository;
};
