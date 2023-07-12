import { AutoMap } from '@automapper/classes';

export class NotificacionFiltro {

  @AutoMap()
  id?: number;

  @AutoMap()
  fk_idTramite?: number;

  @AutoMap()
  notificado?: string;
  
  @AutoMap()
  direccionDpto?: string;

  @AutoMap()
  notificacionPdf?: string;

  @AutoMap()
  flujo?: string;

}
