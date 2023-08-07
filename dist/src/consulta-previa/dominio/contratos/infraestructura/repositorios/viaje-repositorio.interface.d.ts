import { IRepositorio } from './base/repositorio.interface';
import { Viaje } from '../../../entidades';
import { ViajeFiltro } from '../../../entidades/filtros';
export interface IViajeRepositorio extends IRepositorio<Viaje, ViajeFiltro> {
}
