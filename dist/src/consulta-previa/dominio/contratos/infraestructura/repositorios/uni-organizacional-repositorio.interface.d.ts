import { ListaPaginada } from '../../../../../comun/modelos';
import { UniOrganizacional } from '../../../entidades';
import { UniOrganizacionalFiltro } from '../../../entidades/filtros';
export interface IUniOrganizacionalRepositorio {
    obtenerPorId(id: number): Promise<UniOrganizacional>;
    obtenerObjetoPor(fitlro: Partial<UniOrganizacionalFiltro>, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<UniOrganizacional>;
    obtenerPor(filtro: Partial<UniOrganizacionalFiltro>, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<UniOrganizacional>>;
}
