import { Connection, QueryRunner } from 'typeorm';
import { Mapper } from '@automapper/core';
import { IFotografiaRepositorio } from '../../../../dominio/contratos/infraestructura/persistencia/repositorios';
import { Fotografia } from '../../../../dominio/entidades';
export declare class FotografiaRepository implements IFotografiaRepositorio {
    private conexion;
    private readonly mapper;
    private repositorio;
    constructor(conexion: Connection, mapper: Mapper);
    obtenerPorId(id: number): Promise<Fotografia>;
    guardar(objeto: Fotografia, transaccion: QueryRunner): Promise<number>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico?: boolean): Promise<boolean>;
}
export declare const FOTOGRAFIA_REPOSITORIO_PROVIDER: {
    provide: string | Function;
    useClass: typeof FotografiaRepository;
};
