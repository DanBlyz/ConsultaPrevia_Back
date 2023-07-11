import { IRepositorio } from './base/repositorio.interface';
import { Cuenta } from '../../../../entidades';
import { CuentaFiltro } from '../../../../entidades/filtros';
export interface ICuentaRepository extends IRepositorio<Cuenta, CuentaFiltro> {
    validar(cuenta: string, contrasenia: string): Promise<Cuenta>;
    obtenerPorNombre(cuenta: string): Promise<Cuenta>;
}
