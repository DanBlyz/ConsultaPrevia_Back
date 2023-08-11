import { IRepositorio } from './base/repositorio.interface';
import { Documento } from '../../../entidades';
import { DocumentoFiltro } from '../../../entidades/filtros';
export interface IDocumentoRepositorio extends IRepositorio<Documento, DocumentoFiltro> {
}
