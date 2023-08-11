import { IRepositorio } from './base/repositorio.interface';

import { Documento } from '../../../entidades';
import { DocumentoFiltro } from '../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IDocumentoRepositorio
  extends IRepositorio<Documento, DocumentoFiltro> {}
