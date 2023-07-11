import { IRepositorio } from './base/repositorio.interface';
import { Seguimiento } from '../../../entidades';
import { SeguimientoFiltro } from '../../../entidades/filtros';
export interface ISeguimientoRepositorio extends IRepositorio<Seguimiento, SeguimientoFiltro> {
}
