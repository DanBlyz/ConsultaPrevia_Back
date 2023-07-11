import { IRepositorio } from './base/repositorio.interface';
import { Reunion } from '../../../entidades';
import { ReunionFiltro } from '../../../entidades/filtros';
export interface IReunionRepositorio extends IRepositorio<Reunion, ReunionFiltro> {
}
