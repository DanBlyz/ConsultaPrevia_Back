import { IRepositorio } from './base/repositorio.interface';
import { Clasificacion } from '../../../entidades';
import { ClasificacionFiltro } from '../../../entidades/filtros';
export interface IClasificacionRepositorio extends IRepositorio<Clasificacion, ClasificacionFiltro> {
}
