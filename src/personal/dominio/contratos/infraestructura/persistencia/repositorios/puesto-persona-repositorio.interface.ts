import { IRepositorio } from './base/repositorio.interface';

import { PuestoPersona } from '../../../../entidades';
import { PuestoPersonaFiltro } from '../../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IPuestoPersonaRepositorio
  extends IRepositorio<PuestoPersona, PuestoPersonaFiltro> {}
