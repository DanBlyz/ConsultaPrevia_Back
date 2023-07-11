import { IRepositorio } from './base/repositorio.interface';
import { ContenidoDetalle } from '../../../entidades';
import { ContenidoDetalleFiltro } from '../../../entidades/filtros';
export interface IContenidoDetalleRepositorio extends IRepositorio<ContenidoDetalle, ContenidoDetalleFiltro> {
}
