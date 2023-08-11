import { AutoMap } from '@automapper/classes';
import { TramiteFiltro } from './tramite-filtro.model';

export class ResolucionFiltro {

  @AutoMap()
  id?: number;

  @AutoMap()
  fk_idTramite?: number;

  @AutoMap()
  informe?: string;
  
  @AutoMap()
  correlativo?: string;

  @AutoMap()
  informeAprobado?: boolean;

  @AutoMap()
  actoAdministrativo?: boolean;

  @AutoMap()
  resolucionPdf?: string;

  @AutoMap()
  flujo?: string;

  @AutoMap()
  referencia?: string;

  @AutoMap()
  tramite?: TramiteFiltro;

}
