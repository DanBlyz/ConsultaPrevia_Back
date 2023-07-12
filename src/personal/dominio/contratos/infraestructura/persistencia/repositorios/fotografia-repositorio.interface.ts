import { QueryRunner } from 'typeorm';

import { Fotografia } from '../../../../entidades';

export interface IFotografiaRepositorio {
  obtenerPorId(id: number): Promise<Fotografia>;
  guardar(objeto: Fotografia, transaccion: QueryRunner): Promise<number>;
  eliminar(
    id: number,
    transaccion: QueryRunner,
    borradoFisico: boolean,
  ): Promise<boolean>;
}
