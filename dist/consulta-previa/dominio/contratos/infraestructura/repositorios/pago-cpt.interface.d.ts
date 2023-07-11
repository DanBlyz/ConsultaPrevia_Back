import { IRepositorio } from './base/repositorio.interface';
import { PagoCpt } from '../../../entidades';
import { PagoCptFiltro } from '../../../entidades/filtros';
export interface IPagoCptRepositorio extends IRepositorio<PagoCpt, PagoCptFiltro> {
}
