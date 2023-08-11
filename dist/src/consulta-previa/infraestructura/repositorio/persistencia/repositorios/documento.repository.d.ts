import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IDocumentoRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Documento } from '../../../../dominio/entidades';
import { DocumentoFiltro } from '../../../../dominio/entidades/filtros';
export declare class DocumentoRepository implements IDocumentoRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Documento>;
    obtenerObjetoPor(filtro: DocumentoFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Documento>;
    obtenerPor(filtro: DocumentoFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Documento>>;
    guardar(objeto: Documento, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Documento>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const DOCUMENTO_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof DocumentoRepository;
};
