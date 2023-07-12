import { IRepositorio } from './base/repositorio.interface';

import { Grupo } from '../../../../entidades';
import { GrupoFiltro } from '../../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IGrupoRepository extends IRepositorio<Grupo, GrupoFiltro> {}
