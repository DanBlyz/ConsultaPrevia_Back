import { IRepositorio } from './base/repositorio.interface';

import { UniOrganizacional } from '../../../../entidades';
import { UniOrganizacionalFiltro } from '../../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUniOrganizacionalRepositorio
  extends IRepositorio<UniOrganizacional, UniOrganizacionalFiltro> {}
