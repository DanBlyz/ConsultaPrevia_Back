import { IRepositorio } from './base/repositorio.interface';

import { Cuenta } from '../../../../entidades';
import { CuentaFiltro } from '../../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICuentaRepository extends IRepositorio<Cuenta, CuentaFiltro> {
  validar(cuenta: string, contrasenia: string): Promise<Cuenta>;
  obtenerPorNombre(cuenta: string): Promise<Cuenta>;
}
