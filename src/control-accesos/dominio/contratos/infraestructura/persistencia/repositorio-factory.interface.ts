import { QueryRunner } from 'typeorm';

import {
  ICuentaRepository,
  IGrupoRepository,
  IRolCuentaRepository,
  IRolRepository,
  IUsuarioRepository,
} from './repositorios';

export const REPOSITORIO_FACTORY = 'REPOSITORIO_FACTORY';

export interface IRepositorioFactory {
  cuentaRepositorio: ICuentaRepository;
  grupoRepositorio: IGrupoRepository;
  rolCuentaRepositorio: IRolCuentaRepository;
  rolRepositorio: IRolRepository;
  usuarioRepositorio: IUsuarioRepository;

  iniciarTransaccion(): Promise<QueryRunner>;
  confirmar(transaccion: QueryRunner): Promise<void>;
  revertir(transaccion: QueryRunner): Promise<void>;
  liberar(transaccion: QueryRunner): Promise<void>;
}
