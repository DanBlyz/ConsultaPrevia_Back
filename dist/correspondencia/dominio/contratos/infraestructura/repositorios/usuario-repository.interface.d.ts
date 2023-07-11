import { IRepositorio } from './base/repositorio.interface';
import { Usuario } from '../../../entidades';
import { UsuarioFiltro } from '../../../entidades/filtros';
export interface IUsuarioRepository extends IRepositorio<Usuario, UsuarioFiltro> {
}
