import { IRepositorio } from './base/repositorio.interface';
import { Notificacion } from '../../../entidades';
import { NotificacionFiltro } from '../../../entidades/filtros';
export interface INotificacionRepositorio extends IRepositorio<Notificacion, NotificacionFiltro> {
}
