import { IRepositorio } from './base/repositorio.interface';
import { BuzonUsuario } from '../../../entidades';
import { BuzonUsuarioFiltro } from '../../../entidades/filtros';
export interface IBuzonUsuarioRepositorio extends IRepositorio<BuzonUsuario, BuzonUsuarioFiltro> {
}
