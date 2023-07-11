import { IRepositorio } from './base/repositorio.interface';
import { Adjunto } from '../../../entidades';
import { AdjuntoFiltro } from '../../../entidades/filtros';
export interface IAdjuntoRepositorio extends IRepositorio<Adjunto, AdjuntoFiltro> {
}
