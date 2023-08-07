import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { NotificacionCreacionDto, NotificacionDto, NotificacionModificacionDto } from '../../../transferencia';
import { NotificacionFiltroDto } from '../../../transferencia/filtros';
export declare const NOTIFICACION_SERVICIO = "NOTIFICACION_SERVICIO";
export interface INotificacionServicio {
    buscar(filtroDto: NotificacionFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<NotificacionDto>>;
    obtenerPorId(id: number): Promise<NotificacionDto>;
    guardar(objetoDto: NotificacionCreacionDto): Promise<RespuestaObjetoDto<NotificacionDto>>;
    modificar(id: number, objetoDto: NotificacionModificacionDto): Promise<RespuestaObjetoDto<NotificacionDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
