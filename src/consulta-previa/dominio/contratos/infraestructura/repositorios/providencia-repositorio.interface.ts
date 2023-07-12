import { IRepositorio } from './base/repositorio.interface';

import { Providencia } from '../../../entidades';
import { ProvidenciaFiltro } from '../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProvidenciaRepositorio
  extends IRepositorio<Providencia, ProvidenciaFiltro> {}
