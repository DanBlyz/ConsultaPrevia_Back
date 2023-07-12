import { IRepositorio } from './base/repositorio.interface';

import { InfoLaboral } from '../../../../entidades';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IInfoLaboralRepositorio
  extends IRepositorio<InfoLaboral, InfoLaboral> {}
