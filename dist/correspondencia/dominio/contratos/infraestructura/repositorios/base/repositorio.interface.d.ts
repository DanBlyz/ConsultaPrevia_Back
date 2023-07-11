import { QueryRunner } from 'typeorm';
import { ListaPaginada } from '../../../../../../comun/modelos';
export interface IRepositorio<T, TFiltro> {
    obtenerPorId(id: number): Promise<T>;
    obtenerObjetoPor(filtro: TFiltro, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<T>;
    obtenerPor(filtro: TFiltro, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<T>>;
    guardar(objeto: T, transaccion: QueryRunner): Promise<number>;
    modificar(id: number, objeto: Partial<T>, transaccion: QueryRunner): Promise<boolean>;
    eliminar(id: number, transaccion: QueryRunner, borradoFisico: boolean): Promise<boolean>;
}
