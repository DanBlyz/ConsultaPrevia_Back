import { IRepositorio } from './base/repositorio.interface';

import { Reunion } from '../../../entidades';
import { ReunionFiltro } from '../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IReunionRepositorio
  extends IRepositorio<Reunion, ReunionFiltro> {}
