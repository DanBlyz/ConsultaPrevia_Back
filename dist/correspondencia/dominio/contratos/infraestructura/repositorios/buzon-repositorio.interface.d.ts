import { IRepositorio } from './base/repositorio.interface';
import { Buzon } from '../../../entidades';
import { BuzonFiltro } from '../../../entidades/filtros';
export interface IBuzonRepositorio extends IRepositorio<Buzon, BuzonFiltro> {
}
