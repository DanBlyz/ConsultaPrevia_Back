import { IRepositorio } from './base/repositorio.interface';

import { Viaje } from '../../../entidades';
import { ViajeFiltro } from '../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IViajeRepositorio
  extends IRepositorio<Viaje, ViajeFiltro> {}
