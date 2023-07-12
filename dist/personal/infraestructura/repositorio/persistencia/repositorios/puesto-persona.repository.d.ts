import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IPuestoPersonaRepositorio } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { PuestoPersona } from '../../../../dominio/entidades';
import { PuestoPersonaFiltro } from '../../../../dominio/entidades/filtros';
export declare class PuestoPersonaRepository implements IPuestoPersonaRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<PuestoPersona>;
    obtenerObjetoPor(filtro: PuestoPersonaFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<PuestoPersona>;
    obtenerPor(filtro: PuestoPersonaFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<PuestoPersona>>;
    guardar(objeto: PuestoPersona, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<PuestoPersona>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const PUESTO_PERSONA_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof PuestoPersonaRepository;
};
