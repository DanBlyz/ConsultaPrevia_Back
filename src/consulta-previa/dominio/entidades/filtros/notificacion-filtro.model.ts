import { AutoMap } from '@automapper/classes';
import { TramiteFiltro } from './tramite-filtro.model';

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

  @AutoMap()
  representanteMinero?: boolean;

  @AutoMap()
  representanteComunidad?: boolean;

  @AutoMap()
  sifde?: boolean;

  @AutoMap()
  comunidad?: string;

  @AutoMap()
  nroReunion?: string;

  @AutoMap()
  tramite?: TramiteFiltro;

}
