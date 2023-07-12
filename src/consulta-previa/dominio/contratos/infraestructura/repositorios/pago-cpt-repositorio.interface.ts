import { IRepositorio } from './base/repositorio.interface';

import { PagoCpt } from '../../../entidades';
import { PagoCptFiltro } from '../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IPagoCptRepositorio
  extends IRepositorio<PagoCpt, PagoCptFiltro> {}
