import { IRepositorio } from './base/repositorio.interface';
import { Usuario } from '../../../entidades';
import { UsuarioFiltro } from '../../../entidades/filtros';
export interface IUsuarioRepositorio extends IRepositorio<Usuario, UsuarioFiltro> {
}
