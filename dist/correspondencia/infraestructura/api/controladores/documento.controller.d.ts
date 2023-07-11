import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { DocumentoFiltroDto } from '../../../dominio/transferencia/filtros';
import { DocumentoCreacionDto, DocumentoDto, DocumentoModificacionDto, ParticipanteCreacionDto, ParticipanteDto, ParticipanteModificacionDto } from '../../../dominio/transferencia';
export declare class DocumentoController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: DocumentoFiltroDto): Promise<RespuestaListaDto<DocumentoDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<DocumentoDto>>;
    guardar(objetoDto: DocumentoCreacionDto): Promise<RespuestaObjetoDto<DocumentoDto>>;
    modificar(id: number, objetoDto: DocumentoModificacionDto): Promise<RespuestaObjetoDto<DocumentoDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
    obtenerParticipantesPorDocumentoId(documentoId: number): Promise<RespuestaListaDto<ParticipanteDto>>;
    obtenerParticipantePorId(documentoId: number, id: number): Promise<RespuestaObjetoDto<ParticipanteDto>>;
    guardarParticipante(documentoId: number, objetoDto: ParticipanteCreacionDto): Promise<RespuestaObjetoDto<ParticipanteDto>>;
    modificarParticipante(documentoId: number, id: number, objetoDto: ParticipanteModificacionDto): Promise<RespuestaObjetoDto<ParticipanteDto>>;
    eliminarParticipante(documentoId: number, id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
