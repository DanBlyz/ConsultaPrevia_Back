import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { ISujetoIdentificadoRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { SujetoIdentificado } from '../../../../dominio/entidades';
import { SujetoIdentificadoFiltro } from '../../../../dominio/entidades/filtros';
export declare class SujetoIdentificadoRepository implements ISujetoIdentificadoRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<SujetoIdentificado>;
    obtenerObjetoPor(filtro: SujetoIdentificadoFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<SujetoIdentificado>;
    obtenerPor(filtro: SujetoIdentificadoFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<SujetoIdentificado>>;
    guardar(objeto: SujetoIdentificado, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<SujetoIdentificado>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const SUJETO_IDENTIFICADO_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof SujetoIdentificadoRepository;
};
