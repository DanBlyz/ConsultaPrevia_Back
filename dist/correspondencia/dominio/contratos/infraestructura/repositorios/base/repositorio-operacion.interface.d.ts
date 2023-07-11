import { QueryRunner } from 'typeorm';
export interface IRepositorioOperacion<T> {
    guardar(objeto: T, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<T>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico: boolean): Promise<boolean>;
}
