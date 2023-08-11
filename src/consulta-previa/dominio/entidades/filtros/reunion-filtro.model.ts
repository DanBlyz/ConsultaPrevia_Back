import { AutoMap } from '@automapper/classes';
import { NotificacionFiltro } from './notificacion-filtro.model';

export class ReunionFiltro {

  @AutoMap()
  id?: number;

  @AutoMap()
  fk_idNotificacion?: number;

  @AutoMap()
  nroReunion?: string;
  
  @AutoMap()
  conAcuerdo?: boolean;

  @AutoMap()
  sinAcuerdo?: boolean;

  @AutoMap()
  motivo?: string;

  @AutoMap()
  reunionRealizada?: boolean;

  @AutoMap()
  actaReunionPdf?: string;

  @AutoMap()
  estado?: string;

  @AutoMap()
  flujo?: string;

  @AutoMap()
  notificacion?: NotificacionFiltro;


}
