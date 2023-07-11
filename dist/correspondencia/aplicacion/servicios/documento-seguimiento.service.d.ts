import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IDocumentoSeguimientoServicio } from '../../dominio/contratos/aplicacion/servicios';
import { DocumentoSeguimiento } from '../../dominio/entidades';
import { DocumentoSeguimientoCreacionDto, DocumentoSeguimientoDto, DocumentoSeguimientoModificacionDto } from '../../dominio/transferencia';
import { DocumentoSeguimientoFiltroDto } from '../../dominio/transferencia/filtros';
export declare class DocumentoSeguimientoService implements IDocumentoSeguimientoServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: DocumentoSeguimientoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<DocumentoSeguimientoDto>>;
    obtenerPorId(id: number): Promise<DocumentoSeguimientoDto>;
    guardar(objetoDto: DocumentoSeguimientoCreacionDto): Promise<RespuestaObjetoDto<DocumentoSeguimiento>>;
    modificar(id: number, objetoDto: DocumentoSeguimientoModificacionDto): Promise<RespuestaObjetoDto<DocumentoSeguimiento>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const DOCUMENTO_SEGUIMIENTO_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof DocumentoSeguimientoService;
};
