import { IRepositorio } from './base/repositorio.interface';
import { Resolucion } from '../../../entidades';
import { ResolucionFiltro } from '../../../entidades/filtros';
export interface IResolucionRepositorio extends IRepositorio<Resolucion, ResolucionFiltro> {
}
