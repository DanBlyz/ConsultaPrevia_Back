import { IRepositorio } from './base/repositorio.interface';

import { SujetoIdentificado } from '../../../entidades';
import { SujetoIdentificadoFiltro } from '../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISujetoIdentificadoRepositorio
  extends IRepositorio<SujetoIdentificado, SujetoIdentificadoFiltro> {}
