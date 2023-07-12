import { IRepositorio } from './base/repositorio.interface';

import { Informe } from '../../../entidades';
import { InformeFiltro } from '../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IInformeRepositorio
  extends IRepositorio<Informe, InformeFiltro> {}
