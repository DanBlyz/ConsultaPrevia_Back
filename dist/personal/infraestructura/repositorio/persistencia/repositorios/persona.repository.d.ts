import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IPersonaRepositorio } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { Persona } from '../../../../dominio/entidades';
import { PersonaFiltro } from '../../../../dominio/entidades/filtros';
export declare class PersonaRepository implements IPersonaRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Persona>;
    obtenerObjetoPor(filtro: PersonaFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Persona>;
    obtenerPor(filtro: PersonaFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Persona>>;
    guardar(objeto: Persona, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Persona>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const PERSONA_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof PersonaRepository;
};
