import { AutoMap } from '@automapper/classes';
import { TramiteFiltro } from './tramite-filtro.model';

export class ProvidenciaFiltro {

  @AutoMap()
  id?: number;

  @AutoMap()
  fk_idTramite?: number;

  @AutoMap()
  correlativo?: string;
  
  @AutoMap()
  referencia?: string;

  @AutoMap()
  providenciaPdf?: string;

  @AutoMap()
  flujo?: string;

  @AutoMap()
  tramite?: TramiteFiltro;

}
