import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IDocumentoDetalleServicio } from '../../dominio/contratos/aplicacion/servicios';
import { DocumentoDetalleCreacionDto, DocumentoDetalleDto, DocumentoDetalleModificacionDto } from '../../dominio/transferencia';
import { DocumentoDetalleFiltroDto } from '../../dominio/transferencia/filtros';
export declare class DocumentoDetalleService implements IDocumentoDetalleServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: DocumentoDetalleFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<DocumentoDetalleDto>>;
    obtenerPorId(id: number): Promise<DocumentoDetalleDto>;
    guardar(objetoDto: DocumentoDetalleCreacionDto): Promise<RespuestaObjetoDto<DocumentoDetalleDto>>;
    modificar(id: number, objetoDto: DocumentoDetalleModificacionDto): Promise<RespuestaObjetoDto<DocumentoDetalleDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const DOCUMENTO_DETALLE_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof DocumentoDetalleService;
};
