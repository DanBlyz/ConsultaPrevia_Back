import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { INotaRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Nota } from '../../../../dominio/entidades';
import { NotaFiltro } from '../../../../dominio/entidades/filtros';
export declare class NotaRepository implements INotaRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Nota>;
    obtenerObjetoPor(filtro: NotaFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Nota>;
    obtenerPor(filtro: NotaFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Nota>>;
    guardar(objeto: Nota, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Nota>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const NOTA_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof NotaRepository;
};
