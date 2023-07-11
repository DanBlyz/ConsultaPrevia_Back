import { IRepositorio } from './base/repositorio.interface';
import { Prueba } from '../../../entidades';
import { PruebaFiltro } from '../../../entidades/filtros';
export interface IPruebaRepositorio extends IRepositorio<Prueba, PruebaFiltro> {
}
