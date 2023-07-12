import { IRepositorio } from './base/repositorio.interface';
import { UniOrganizacional } from '../../../../entidades';
import { UniOrganizacionalFiltro } from '../../../../entidades/filtros';
export interface IUniOrganizacionalRepositorio extends IRepositorio<UniOrganizacional, UniOrganizacionalFiltro> {
}
