import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { DocumentoCreacionDto, DocumentoDto, DocumentoModificacionDto } from '../../../transferencia';
import { DocumentoFiltroDto } from '../../../transferencia/filtros';
export declare const DOCUMENTO_SERVICIO = "DOCUMENTO_SERVICIO";
export interface IDocumentoServicio {
    buscar(filtroDto: DocumentoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<DocumentoDto>>;
    obtenerPorId(id: number): Promise<DocumentoDto>;
    guardar(objetoDto: DocumentoCreacionDto): Promise<RespuestaObjetoDto<DocumentoDto>>;
    modificar(id: number, objetoDto: DocumentoModificacionDto): Promise<RespuestaObjetoDto<DocumentoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
