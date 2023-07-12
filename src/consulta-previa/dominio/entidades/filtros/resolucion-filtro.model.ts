import { AutoMap } from '@automapper/classes';

export class ResolucionFiltro {

  @AutoMap()
  id?: number;

  @AutoMap()
  fk_idTramite?: number;

  @AutoMap()
  informe?: string;
  
  @AutoMap()
  resolucion?: string;

  @AutoMap()
  informeAprobado?: boolean;

  @AutoMap()
  actoAdministrativo?: boolean;

  @AutoMap()
  resolucionPdf?: string;

  @AutoMap()
  flujo?: string;
}
