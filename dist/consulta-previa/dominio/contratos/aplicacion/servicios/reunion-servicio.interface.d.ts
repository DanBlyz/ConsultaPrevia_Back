import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { ReunionCreacionDto, ReunionDto, ReunionModificacionDto } from '../../../transferencia';
import { ReunionFiltroDto } from '../../../transferencia/filtros';
export declare const REUNION_SERVICIO = "REUNION_SERVICIO";
export interface IReunionServicio {
    buscar(filtroDto: ReunionFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ReunionDto>>;
    obtenerPorId(id: number): Promise<ReunionDto>;
    guardar(objetoDto: ReunionCreacionDto): Promise<RespuestaObjetoDto<ReunionDto>>;
    modificar(id: number, objetoDto: ReunionModificacionDto): Promise<RespuestaObjetoDto<ReunionDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
