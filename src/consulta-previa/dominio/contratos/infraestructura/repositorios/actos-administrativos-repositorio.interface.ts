import { IRepositorio } from './base/repositorio.interface';

import { ActoAdministrativo } from '../../../entidades';
import { ActoAdministrativoFiltro } from '../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IActoAdministrativoRepositorio
  extends IRepositorio<ActoAdministrativo, ActoAdministrativoFiltro> {}
