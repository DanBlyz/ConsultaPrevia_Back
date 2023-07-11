import { IRepositorio } from './base/repositorio.interface';
import { DocumentoSeguimiento } from '../../../entidades';
import { DocumentoSeguimientoFiltro } from '../../../entidades/filtros';
export interface IDocumentoSeguimientoRepositorio extends IRepositorio<DocumentoSeguimiento, DocumentoSeguimientoFiltro> {
}
