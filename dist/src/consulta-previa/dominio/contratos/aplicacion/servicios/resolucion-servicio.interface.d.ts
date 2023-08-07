import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { ResolucionCreacionDto, ResolucionDto, ResolucionModificacionDto } from '../../../../dominio/transferencia';
import { ResolucionFiltroDto } from '../../../transferencia/filtros';
export declare const RESOLUCION_SERVICIO = "RESOLUCION_SERVICIO";
export interface IResolucionServicio {
    buscar(filtroDto: ResolucionFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ResolucionDto>>;
    obtenerPorId(id: number): Promise<ResolucionDto>;
    guardar(objetoDto: ResolucionCreacionDto): Promise<RespuestaObjetoDto<ResolucionDto>>;
    modificar(id: number, objetoDto: ResolucionModificacionDto): Promise<RespuestaObjetoDto<ResolucionDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
