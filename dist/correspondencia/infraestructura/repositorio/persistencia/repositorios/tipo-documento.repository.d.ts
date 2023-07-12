import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { ITipoDocumentoRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { TipoDocumento } from '../../../../dominio/entidades';
import { TipoDocumentoFiltro } from '../../../../dominio/entidades/filtros';
export declare class TipoDocumentoRepository implements ITipoDocumentoRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<TipoDocumento>;
    obtenerObjetoPor(filtro: TipoDocumentoFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<TipoDocumento>;
    obtenerPor(filtro: TipoDocumentoFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<TipoDocumento>>;
    guardar(objeto: TipoDocumento, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<TipoDocumento>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const TIPO_DOCUMENTO_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof TipoDocumentoRepository;
};
