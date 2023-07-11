import { IRepositorio } from './base/repositorio.interface';
import { Plantilla } from '../../../entidades';
import { PlantillaFiltro } from '../../../entidades/filtros';
export interface IPlantillaRepositorio extends IRepositorio<Plantilla, PlantillaFiltro> {
}
