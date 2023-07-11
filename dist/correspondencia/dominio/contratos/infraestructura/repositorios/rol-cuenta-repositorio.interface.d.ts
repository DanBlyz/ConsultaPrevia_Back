import { IRepositorio } from './base/repositorio.interface';
import { RolCuenta } from '../../../entidades';
export interface IRolCuentaRepositorio extends IRepositorio<RolCuenta, Partial<RolCuenta>> {
    obtenerPorCuentaId(cuentaId: number): Promise<RolCuenta[]>;
    obtenerPorGrupo(grupoCodigo: string[], cuentaId: number): Promise<RolCuenta[]>;
}
