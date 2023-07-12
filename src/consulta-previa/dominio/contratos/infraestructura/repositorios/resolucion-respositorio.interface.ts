import { IRepositorio } from './base/repositorio.interface';

import { Resolucion } from '../../../entidades';
import { ResolucionFiltro } from '../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IResolucionRepositorio
  extends IRepositorio<Resolucion, ResolucionFiltro> {}
