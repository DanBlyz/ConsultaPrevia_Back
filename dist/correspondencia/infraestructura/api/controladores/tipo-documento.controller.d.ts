import { CodificadorDto, RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { TipoDocumentoFiltroDto } from '../../../dominio/transferencia/filtros';
import { TipoDocumentoCreacionDto, TipoDocumentoDto, TipoDocumentoModificacionDto } from '../../../dominio/transferencia';
export declare class TipoDocumentoController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    obtenerCodificador(): Promise<RespuestaListaDto<CodificadorDto>>;
    buscar(filtroDto: TipoDocumentoFiltroDto): Promise<RespuestaListaDto<TipoDocumentoDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<TipoDocumentoDto>>;
    guardar(objetoDto: TipoDocumentoCreacionDto): Promise<RespuestaObjetoDto<TipoDocumentoDto>>;
    modificar(id: number, objetoDto: TipoDocumentoModificacionDto): Promise<RespuestaObjetoDto<TipoDocumentoDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
