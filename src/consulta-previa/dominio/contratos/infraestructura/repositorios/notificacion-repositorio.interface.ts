import { IRepositorio } from './base/repositorio.interface';

import { Notificacion } from '../../../entidades';
import { NotificacionFiltro } from '../../../entidades/filtros';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface INotificacionRepositorio
  extends IRepositorio<Notificacion, NotificacionFiltro> {}
