import { IRepositorio } from './base/repositorio.interface';
import { Puesto } from '../../../../entidades';
import { PuestoFiltro } from '../../../../entidades/filtros';
export interface IPuestoRepositorio extends IRepositorio<Puesto, PuestoFiltro> {
}
