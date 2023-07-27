import { AutoMap } from '@automapper/classes';

export class ReunionFiltro {

  @AutoMap()
  id?: number;

  @AutoMap()
  fk_idNotificacion?: number;

  @AutoMap()
  nroReunion?: string;
  
  @AutoMap()
  acuerdo?: boolean;

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

}
