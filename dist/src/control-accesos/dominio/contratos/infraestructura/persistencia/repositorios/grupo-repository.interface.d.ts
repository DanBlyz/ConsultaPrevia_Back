import { IRepositorio } from './base/repositorio.interface';
import { Grupo } from '../../../../entidades';
import { GrupoFiltro } from '../../../../entidades/filtros';
export interface IGrupoRepository extends IRepositorio<Grupo, GrupoFiltro> {
}
