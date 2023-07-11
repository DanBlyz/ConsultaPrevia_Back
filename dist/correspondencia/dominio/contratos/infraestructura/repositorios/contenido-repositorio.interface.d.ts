import { IRepositorio } from './base/repositorio.interface';
import { Contenido } from '../../../entidades';
import { ContenidoFiltro } from '../../../entidades/filtros';
export interface IContenidoRepositorio extends IRepositorio<Contenido, ContenidoFiltro> {
}
