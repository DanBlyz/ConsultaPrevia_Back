import { IRepositorio } from './base/repositorio.interface';
import { Parametro } from '../../../../entidades';
import { ParametroFiltro } from '../../../../entidades/filtros';
export interface IParametroRepositorio extends IRepositorio<Parametro, ParametroFiltro> {
}
