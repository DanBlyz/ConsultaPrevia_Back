import { IRepositorio } from './base/repositorio.interface';

import { Persona } from '../../../../entidades';
import { PersonaFiltro } from '../../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IPersonaRepositorio
  extends IRepositorio<Persona, PersonaFiltro> {}
