import { IRepositorio } from './base/repositorio.interface';
import { Providencia } from '../../../entidades';
import { ProvidenciaFiltro } from '../../../entidades/filtros';
export interface IProvidenciaRepositorio extends IRepositorio<Providencia, ProvidenciaFiltro> {
}
