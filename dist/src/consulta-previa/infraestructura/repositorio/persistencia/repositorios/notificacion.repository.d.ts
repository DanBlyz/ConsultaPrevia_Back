import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { INotificacionRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Notificacion } from '../../../../dominio/entidades';
import { NotificacionFiltro } from '../../../../dominio/entidades/filtros';
export declare class NotificacionRepository implements INotificacionRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Notificacion>;
    obtenerObjetoPor(filtro: NotificacionFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Notificacion>;
    obtenerPor(filtro: NotificacionFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Notificacion>>;
    guardar(objeto: Notificacion, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Notificacion>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const NOTIFICACION_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof NotificacionRepository;
};
