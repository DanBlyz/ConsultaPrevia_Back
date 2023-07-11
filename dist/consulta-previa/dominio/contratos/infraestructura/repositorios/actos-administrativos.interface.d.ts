import { IRepositorio } from './base/repositorio.interface';
import { ActoAdministrativo } from '../../../entidades';
import { ActoAdministrativoFiltro } from '../../../entidades/filtros';
export interface IActoAdministrativoRepositorio extends IRepositorio<ActoAdministrativo, ActoAdministrativoFiltro> {
}
