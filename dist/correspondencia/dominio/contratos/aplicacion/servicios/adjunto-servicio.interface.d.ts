import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { AdjuntoCreacionDto, AdjuntoDto, AdjuntoModificacionDto } from '../../../transferencia';
import { AdjuntoFiltroDto } from '../../../transferencia/filtros';
export declare const ADJUNTO_SERVICIO = "ADJUNTO_SERVICIO";
export interface IAdjuntoServicio {
    buscar(filtroDto: AdjuntoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<AdjuntoDto>>;
    obtenerPorId(id: number): Promise<AdjuntoDto>;
    guardar(objetoDto: AdjuntoCreacionDto): Promise<RespuestaObjetoDto<AdjuntoDto>>;
    modificar(id: number, objeto: AdjuntoModificacionDto): Promise<RespuestaObjetoDto<AdjuntoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
