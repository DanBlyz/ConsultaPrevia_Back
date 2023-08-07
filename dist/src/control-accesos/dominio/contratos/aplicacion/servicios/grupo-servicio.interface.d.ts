import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { GrupoCreacionDto, GrupoDto, GrupoModificacionDto } from '../../../transferencia';
import { GrupoFiltroDto } from '../../../transferencia/filtros';
export declare const GRUPO_SERVICIO = "GRUPO_SERVICIO";
export interface IGrupoServicio {
    buscar(filtroDto: GrupoFiltroDto, pagina: number, cantidad: number): Promise<ListaPaginadaDto<GrupoDto>>;
    obtenerPorId(id: number): Promise<GrupoDto>;
    guardar(objetoDto: GrupoCreacionDto): Promise<RespuestaObjetoDto<GrupoDto>>;
    modificar(id: number, objetoDto: GrupoModificacionDto): Promise<RespuestaObjetoDto<GrupoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
