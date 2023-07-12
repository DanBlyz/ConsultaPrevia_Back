import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IUniOrganizacionalRepositorio } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { UniOrganizacional } from '../../../../dominio/entidades';
import { UniOrganizacionalFiltro } from '../../../../dominio/entidades/filtros';
export declare class UniOrganizacionalRepository implements IUniOrganizacionalRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<UniOrganizacional>;
    obtenerObjetoPor(filtro: UniOrganizacionalFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<UniOrganizacional>;
    obtenerPor(filtro: UniOrganizacionalFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<UniOrganizacional>>;
    guardar(objeto: UniOrganizacional, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<UniOrganizacional>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const UNI_ORGANIZACIONAL_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof UniOrganizacionalRepository;
};
