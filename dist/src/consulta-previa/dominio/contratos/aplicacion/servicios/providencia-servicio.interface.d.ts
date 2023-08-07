import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { ProvidenciaCreacionDto, ProvidenciaDto, ProvidenciaModificacionDto } from '../../../../dominio/transferencia';
import { ProvidenciaFiltroDto } from '../../../transferencia/filtros';
export declare const PROVIDENCIA_SERVICIO = "PROVIDENCIA_SERVICIO";
export interface IProvidenciaServicio {
    buscar(filtroDto: ProvidenciaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ProvidenciaDto>>;
    obtenerPorId(id: number): Promise<ProvidenciaDto>;
    guardar(objetoDto: ProvidenciaCreacionDto): Promise<RespuestaObjetoDto<ProvidenciaDto>>;
    modificar(id: number, objetoDto: ProvidenciaModificacionDto): Promise<RespuestaObjetoDto<ProvidenciaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
