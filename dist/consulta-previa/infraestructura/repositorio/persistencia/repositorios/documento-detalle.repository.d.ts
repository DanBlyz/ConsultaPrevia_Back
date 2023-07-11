import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IDocumentoDetalleRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { DocumentoDetalle } from '../../../../dominio/entidades';
import { DocumentoDetalleFiltro } from '../../../../dominio/entidades/filtros';
export declare class DocumentoDetalleRepository implements IDocumentoDetalleRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<DocumentoDetalle>;
    obtenerObjetoPor(filtro: DocumentoDetalleFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<DocumentoDetalle>;
    obtenerPor(filtro: DocumentoDetalleFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<DocumentoDetalle>>;
    guardar(objeto: DocumentoDetalle, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<DocumentoDetalle>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const DOCUMENTO_DETALLE_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof DocumentoDetalleRepository;
};
