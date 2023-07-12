import { IRepositorio } from './base/repositorio.interface';

import { Usuario } from '../../../../entidades';
import { UsuarioFiltro } from '../../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUsuarioRepository
  extends IRepositorio<Usuario, UsuarioFiltro> {}
