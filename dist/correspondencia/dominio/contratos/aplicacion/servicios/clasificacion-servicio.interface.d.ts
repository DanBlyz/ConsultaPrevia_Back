import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { ClasificacionCreacionDto, ClasificacionDto, ClasificacionModificacionDto } from '../../../transferencia';
import { ClasificacionFiltroDto } from '../../../transferencia/filtros';
export declare const CLASIFICACION_SERVICIO = "CLASIFICACION_SERVICIO";
export interface IClasificacionServicio {
    buscar(filtroDto: ClasificacionFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ClasificacionDto>>;
    obtenerPorId(id: number): Promise<ClasificacionDto>;
    guardar(objetoDto: ClasificacionCreacionDto): Promise<RespuestaObjetoDto<ClasificacionDto>>;
    modificar(id: number, objetoDto: ClasificacionModificacionDto): Promise<RespuestaObjetoDto<ClasificacionDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
