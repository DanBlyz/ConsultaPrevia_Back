import { IRepositorio } from './base/repositorio.interface';
import { Nota } from '../../../entidades';
import { NotaFiltro } from '../../../entidades/filtros';
export interface INotaRepositorio extends IRepositorio<Nota, NotaFiltro> {
}
