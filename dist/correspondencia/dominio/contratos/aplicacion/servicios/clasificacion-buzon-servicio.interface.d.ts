import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { ClasificacionBuzonCreacionDto, ClasificacionBuzonDto, ClasificacionBuzonModificacionDto } from '../../../../dominio/transferencia';
import { ClasificacionBuzonFiltroDto } from '../../../transferencia/filtros';
export declare const CLASIFICACION_BUZON_SERVICIO = "CLASIFICACION_BUZON_SERVICIO";
export interface IClasificacionBuzonServicio {
    buscar(filtroDto: ClasificacionBuzonFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ClasificacionBuzonDto>>;
    obtenerPorId(id: number): Promise<ClasificacionBuzonDto>;
    guardar(objetoDto: ClasificacionBuzonCreacionDto): Promise<RespuestaObjetoDto<ClasificacionBuzonDto>>;
    modificar(id: number, objetoDto: ClasificacionBuzonModificacionDto): Promise<RespuestaObjetoDto<ClasificacionBuzonDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
