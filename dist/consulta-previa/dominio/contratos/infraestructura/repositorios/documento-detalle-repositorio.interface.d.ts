import { IRepositorio } from './base/repositorio.interface';
import { DocumentoDetalle } from '../../../entidades';
import { DocumentoDetalleFiltro } from '../../../entidades/filtros';
export interface IDocumentoDetalleRepositorio extends IRepositorio<DocumentoDetalle, DocumentoDetalleFiltro> {
}
