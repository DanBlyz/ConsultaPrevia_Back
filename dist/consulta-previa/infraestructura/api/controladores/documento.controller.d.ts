import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { DocumentoFiltroDto } from '../../../dominio/transferencia/filtros';
import { DocumentoCreacionDto, DocumentoDto, DocumentoModificacionDto } from '../../../dominio/transferencia';
export declare class DocumentoController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: DocumentoFiltroDto): Promise<RespuestaListaDto<DocumentoDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<DocumentoDto>>;
    guardar(objetoDto: DocumentoCreacionDto): Promise<RespuestaObjetoDto<DocumentoDto>>;
    modificar(id: number, objetoDto: DocumentoModificacionDto): Promise<RespuestaObjetoDto<DocumentoDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
