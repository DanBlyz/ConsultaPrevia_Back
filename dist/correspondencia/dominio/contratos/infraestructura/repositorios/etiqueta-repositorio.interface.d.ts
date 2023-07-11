import { IRepositorio } from './base/repositorio.interface';
import { Etiqueta } from '../../../entidades';
import { EtiquetaFiltro } from '../../../entidades/filtros';
export interface IEtiquetaRepositorio extends IRepositorio<Etiqueta, EtiquetaFiltro> {
}
