import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IHojaRutaRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { HojaRuta } from '../../../../dominio/entidades';
import { HojaRutaFiltro } from '../../../../dominio/entidades/filtros';
export declare class HojaRutaRepository implements IHojaRutaRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<HojaRuta>;
    obtenerObjetoPor(filtro: HojaRutaFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<HojaRuta>;
    obtenerPor(filtro: HojaRutaFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<HojaRuta>>;
    guardar(objeto: HojaRuta, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<HojaRuta>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
    obtenerCorrelativo(gestion: number): Promise<any>;
}
export declare const HOJA_RUTA_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof HojaRutaRepository;
};
