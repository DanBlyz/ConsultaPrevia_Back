import { IRepositorio } from './base/repositorio.interface';
import { Rol } from '../../../entidades';
import { RolFiltro } from '../../../entidades/filtros';
export interface IRolRepositorio extends IRepositorio<Rol, RolFiltro> {
}
