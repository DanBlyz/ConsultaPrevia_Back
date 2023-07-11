import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IDocumentoServicio } from '../../dominio/contratos/aplicacion/servicios';
import { DocumentoCreacionDto, DocumentoDto, DocumentoModificacionDto } from '../../dominio/transferencia';
import { DocumentoFiltroDto } from '../../dominio/transferencia/filtros';
export declare class DocumentoService implements IDocumentoServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: DocumentoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<DocumentoDto>>;
    obtenerPorId(id: number): Promise<DocumentoDto>;
    guardar(objetoDto: DocumentoCreacionDto): Promise<RespuestaObjetoDto<DocumentoDto>>;
    modificar(id: number, objetoDto: DocumentoModificacionDto): Promise<RespuestaObjetoDto<DocumentoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const DOCUMENTO_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof DocumentoService;
};
