import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IContenidoDetalleRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { ContenidoDetalle } from '../../../../dominio/entidades';
import { ContenidoDetalleFiltro } from '../../../../dominio/entidades/filtros';
export declare class ContenidoDetalleRepository implements IContenidoDetalleRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<ContenidoDetalle>;
    obtenerObjetoPor(filtro: ContenidoDetalleFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ContenidoDetalle>;
    obtenerPor(filtro: ContenidoDetalleFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<ContenidoDetalle>>;
    guardar(objeto: ContenidoDetalle, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<ContenidoDetalle>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const CONTENIDO_DETALLE_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof ContenidoDetalleRepository;
};
