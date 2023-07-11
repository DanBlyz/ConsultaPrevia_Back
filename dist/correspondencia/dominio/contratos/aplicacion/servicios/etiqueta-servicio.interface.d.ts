import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { EtiquetaCreacionDto, EtiquetaDto, EtiquetaModificacionDto } from '../../../../dominio/transferencia';
import { EtiquetaFiltroDto } from '../../../transferencia/filtros';
export declare const ETIQUETA_SERVICIO = "ETIQUETA_SERVICIO";
export interface IEtiquetaServicio {
    buscar(filtroDto: EtiquetaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<EtiquetaDto>>;
    obtenerPorId(id: number): Promise<EtiquetaDto>;
    guardar(objetoDto: EtiquetaCreacionDto): Promise<RespuestaObjetoDto<EtiquetaDto>>;
    modificar(id: number, objetoDto: EtiquetaModificacionDto): Promise<RespuestaObjetoDto<EtiquetaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
