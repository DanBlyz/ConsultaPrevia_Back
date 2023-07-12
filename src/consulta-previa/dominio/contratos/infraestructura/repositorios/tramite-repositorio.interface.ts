import { IRepositorio } from './base/repositorio.interface';

import { Tramite } from '../../../entidades';
import { TramiteFiltro } from '../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITramiteRepositorio
  extends IRepositorio<Tramite, TramiteFiltro> {}
