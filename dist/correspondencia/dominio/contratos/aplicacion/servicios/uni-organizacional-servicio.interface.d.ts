import { ListaPaginadaDto } from '../../../../../comun/transferencia';
import { UniOrganizacionalDto } from '../../../transferencia';
import { UniOrganizacionalFiltroDto } from '../../../transferencia/filtros';
export declare const UNI_ORGANIZACIONAL_SERVICIO = "UNI_ORGANIZACIONAL_SERVICIO";
export interface IUniOrganizacionalServicio {
    buscar(filtroDto: UniOrganizacionalFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<UniOrganizacionalDto>>;
    obtenerPorId(id: number): Promise<UniOrganizacionalDto>;
}
