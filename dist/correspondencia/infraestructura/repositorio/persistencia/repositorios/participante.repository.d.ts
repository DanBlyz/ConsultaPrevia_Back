import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IParticipanteRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Participante } from '../../../../dominio/entidades';
import { ParticipanteFiltro } from '../../../../dominio/entidades/filtros';
export declare class ParticipanteRepository implements IParticipanteRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    private evaluarCriterios;
    obtenerPorId(id: number): Promise<Participante>;
    obtenerObjetoPor(filtro: ParticipanteFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Participante>;
    obtenerPor(filtro: ParticipanteFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Participante>>;
    guardar(objeto: Participante, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<Participante>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const PARTICIPANTE_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof ParticipanteRepository;
};
