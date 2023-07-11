import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { ITipoDocumentoServicio } from '../../dominio/contratos/aplicacion/servicios';
import { TipoDocumentoCreacionDto, TipoDocumentoDto, TipoDocumentoModificacionDto } from '../../dominio/transferencia';
import { TipoDocumentoFiltroDto } from '../../dominio/transferencia/filtros';
export declare class TipoDocumentoService implements ITipoDocumentoServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: TipoDocumentoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<TipoDocumentoDto>>;
    obtenerPorId(id: number): Promise<TipoDocumentoDto>;
    guardar(objetoDto: TipoDocumentoCreacionDto): Promise<RespuestaObjetoDto<TipoDocumentoDto>>;
    modificar(id: number, objetoDto: TipoDocumentoModificacionDto): Promise<RespuestaObjetoDto<TipoDocumentoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const TIPO_DOCUMENTO_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof TipoDocumentoService;
};
