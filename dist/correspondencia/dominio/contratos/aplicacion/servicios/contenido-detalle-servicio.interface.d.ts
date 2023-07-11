import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { ContenidoDetalleCreacionDto, ContenidoDetalleDto, ContenidoDetalleModificacionDto } from '../../../../dominio/transferencia';
import { ContenidoDetalleFiltroDto } from '../../../transferencia/filtros';
export declare const CONTENIDO_DETALLE_SERVICIO = "CONTENIDO_DETALLE_SERVICIO";
export interface IContenidoDetalleServicio {
    buscar(filtroDto: ContenidoDetalleFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ContenidoDetalleDto>>;
    obtenerPorId(id: number): Promise<ContenidoDetalleDto>;
    guardar(objetoDto: ContenidoDetalleCreacionDto): Promise<RespuestaObjetoDto<ContenidoDetalleDto>>;
    modificar(id: number, objetoDto: ContenidoDetalleModificacionDto): Promise<RespuestaObjetoDto<ContenidoDetalleDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
