import { IRepositorio } from './base/repositorio.interface';

import { Parametro } from '../../../../entidades';
import { ParametroFiltro } from '../../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IParametroRepositorio
  extends IRepositorio<Parametro, ParametroFiltro> {}
