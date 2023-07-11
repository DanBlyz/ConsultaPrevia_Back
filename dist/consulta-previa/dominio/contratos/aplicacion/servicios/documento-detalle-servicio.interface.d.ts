import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { DocumentoDetalleCreacionDto, DocumentoDetalleDto, DocumentoDetalleModificacionDto } from '../../../../dominio/transferencia';
import { DocumentoDetalleFiltroDto } from '../../../transferencia/filtros';
export declare const DOCUMENTO_DETALLE_SERVICIO = "DOCUMENTO_DETALLE_SERVICIO";
export interface IDocumentoDetalleServicio {
    buscar(filtroDto: DocumentoDetalleFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<DocumentoDetalleDto>>;
    obtenerPorId(id: number): Promise<DocumentoDetalleDto>;
    guardar(objetoDto: DocumentoDetalleCreacionDto): Promise<RespuestaObjetoDto<DocumentoDetalleDto>>;
    modificar(id: number, objetoDto: DocumentoDetalleModificacionDto): Promise<RespuestaObjetoDto<DocumentoDetalleDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
