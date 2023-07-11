import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { DocumentoSeguimientoCreacionDto, DocumentoSeguimientoDto, DocumentoSeguimientoModificacionDto } from '../../../../dominio/transferencia';
import { DocumentoSeguimientoFiltroDto } from '../../../transferencia/filtros';
export declare const DOCUMENTO_SEGUIMIENTO_SERVICIO = "DOCUMENTO_SEGUIMIENTO_SERVICIO";
export interface IDocumentoSeguimientoServicio {
    buscar(filtroDto: DocumentoSeguimientoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<DocumentoSeguimientoDto>>;
    obtenerPorId(id: number): Promise<DocumentoSeguimientoDto>;
    guardar(objetoDto: DocumentoSeguimientoCreacionDto): Promise<RespuestaObjetoDto<DocumentoSeguimientoDto>>;
    modificar(id: number, objetoDto: DocumentoSeguimientoModificacionDto): Promise<RespuestaObjetoDto<DocumentoSeguimientoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
