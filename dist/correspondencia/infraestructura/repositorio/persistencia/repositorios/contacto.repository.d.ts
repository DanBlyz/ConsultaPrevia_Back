import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IContactoRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Contacto } from '../../../../dominio/entidades';
import { ContactoFiltro } from '../../../../dominio/entidades/filtros';
export declare class ContactoRepository implements IContactoRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Contacto>;
    obtenerObjetoPor(filtro: ContactoFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Contacto>;
    obtenerPor(filtro: ContactoFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Contacto>>;
    guardar(objeto: Contacto, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Contacto>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const CONTACTO_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof ContactoRepository;
};
