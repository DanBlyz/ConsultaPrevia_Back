import { IRepositorio } from './base/repositorio.interface';
import { Tramite } from '../../../entidades';
import { TramiteFiltro } from '../../../entidades/filtros';
export interface ITramiteRepositorio extends IRepositorio<Tramite, TramiteFiltro> {
}
