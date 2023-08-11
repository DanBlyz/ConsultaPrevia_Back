import { AutoMap } from '@automapper/classes';
import { TramiteFiltro } from './tramite-filtro.model';

export class InformeFiltro {

  @AutoMap()
  id?: number;

  @AutoMap()
  fk_idTramite?: number;

  @AutoMap()
  correlativo?: string;
  
  @AutoMap()
  referencia?: string;

  @AutoMap()
  informePdf?: string;

  @AutoMap()
  tipoDocumento?: string;

  @AutoMap()
  flujo?: string;

  @AutoMap()
  tramite?: TramiteFiltro;
  
}
