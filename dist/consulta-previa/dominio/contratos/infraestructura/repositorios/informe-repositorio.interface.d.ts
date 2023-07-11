import { IRepositorio } from './base/repositorio.interface';
import { Informe } from '../../../entidades';
import { InformeFiltro } from '../../../entidades/filtros';
export interface IInformeRepositorio extends IRepositorio<Informe, InformeFiltro> {
}
