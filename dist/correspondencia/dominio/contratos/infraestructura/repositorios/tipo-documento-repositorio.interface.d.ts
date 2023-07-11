import { IRepositorio } from './base/repositorio.interface';
import { TipoDocumento } from '../../../entidades';
import { TipoDocumentoFiltro } from '../../../entidades/filtros';
export interface ITipoDocumentoRepositorio extends IRepositorio<TipoDocumento, TipoDocumentoFiltro> {
}
