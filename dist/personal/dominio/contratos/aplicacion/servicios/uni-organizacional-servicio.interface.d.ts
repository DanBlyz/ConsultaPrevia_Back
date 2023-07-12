import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { UniOrganizacionalCreacionDto, UniOrganizacionalDto, UniOrganizacionalModificacionDto } from '../../../transferencia';
import { UniOrganizacionalFiltroDto } from '../../../transferencia/filtros';
export declare const UNI_ORGANIZACIONAL_SERVICIO = "UNI_ORGANIZACIONAL_SERVICIO";
export interface IUniOrganizacionalServicio {
    buscar(filtro: Partial<UniOrganizacionalFiltroDto>, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<UniOrganizacionalDto>>;
    obtenerPorId(id: number): Promise<UniOrganizacionalDto>;
    guardar(objetoDto: UniOrganizacionalCreacionDto): Promise<RespuestaObjetoDto<UniOrganizacionalDto>>;
    modificar(id: number, objetoDto: UniOrganizacionalModificacionDto): Promise<RespuestaObjetoDto<UniOrganizacionalDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
