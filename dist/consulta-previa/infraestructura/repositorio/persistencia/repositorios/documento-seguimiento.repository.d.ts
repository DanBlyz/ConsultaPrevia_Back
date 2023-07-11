import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IDocumentoSeguimientoRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { DocumentoSeguimiento } from '../../../../dominio/entidades';
import { DocumentoSeguimientoFiltro } from '../../../../dominio/entidades/filtros';
export declare class DocumentoSeguimientoRepository implements IDocumentoSeguimientoRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<DocumentoSeguimiento>;
    obtenerObjetoPor(filtro: DocumentoSeguimientoFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<DocumentoSeguimiento>;
    obtenerPor(filtro: DocumentoSeguimientoFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<DocumentoSeguimiento>>;
    guardar(objeto: DocumentoSeguimiento, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<DocumentoSeguimiento>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const DOCUMENTO_SEGUIMIENTO_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof DocumentoSeguimientoRepository;
};
