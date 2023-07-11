import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { TramiteCreacionDto, TramiteDto, TramiteModificacionDto } from '../../../../dominio/transferencia';
import { TramiteFiltroDto } from '../../../transferencia/filtros';
export declare const TRAMITE_SERVICIO = "TRAMITE_SERVICIO";
export interface ITramiteServicio {
    buscar(filtroDto: TramiteFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<TramiteDto>>;
    obtenerPorId(id: number): Promise<TramiteDto>;
    guardar(objetoDto: TramiteCreacionDto): Promise<RespuestaObjetoDto<TramiteDto>>;
    modificar(id: number, objetoDto: TramiteModificacionDto): Promise<RespuestaObjetoDto<TramiteDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
