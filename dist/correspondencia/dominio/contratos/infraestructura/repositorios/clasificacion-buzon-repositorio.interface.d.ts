import { IRepositorio } from './base/repositorio.interface';
import { ClasificacionBuzon } from '../../../entidades';
import { ClasificacionBuzonFiltro } from '../../../entidades/filtros';
export interface IClasificacionBuzonRepositorio extends IRepositorio<ClasificacionBuzon, ClasificacionBuzonFiltro> {
}
