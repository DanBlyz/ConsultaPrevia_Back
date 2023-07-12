import { IRepositorio } from './base/repositorio.interface';

import { Puesto } from '../../../../entidades';
import { PuestoFiltro } from '../../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IPuestoRepositorio
  extends IRepositorio<Puesto, PuestoFiltro> {}
