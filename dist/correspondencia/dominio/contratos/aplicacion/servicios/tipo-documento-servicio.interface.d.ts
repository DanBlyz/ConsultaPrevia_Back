import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { TipoDocumentoCreacionDto, TipoDocumentoDto, TipoDocumentoModificacionDto } from '../../../transferencia';
import { TipoDocumentoFiltroDto } from '../../../transferencia/filtros';
export declare const TIPO_DOCUMENTO_SERVICIO = "TIPO_DOCUMENTO_SERVICIO";
export interface ITipoDocumentoServicio {
    buscar(filtroDto: TipoDocumentoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<TipoDocumentoDto>>;
    obtenerPorId(id: number): Promise<TipoDocumentoDto>;
    guardar(objetoDto: TipoDocumentoCreacionDto): Promise<RespuestaObjetoDto<TipoDocumentoDto>>;
    modificar(id: number, objetoDto: TipoDocumentoModificacionDto): Promise<RespuestaObjetoDto<TipoDocumentoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
