import { AutoMap } from '@automapper/classes';
import { TramiteFiltro } from './tramite-filtro.model';
export class ActoAdministrativoFiltro {

  @AutoMap()
  id?: number;

  @AutoMap()
  fk_idTramite?: number;

  @AutoMap()
  fk_idResolucion?: number;

  @AutoMap()
  viajeRealizado?: boolean;
  
  @AutoMap()
  flujo?: string;

  @AutoMap()
  estado?: string;

  @AutoMap()
  tramite?: TramiteFiltro;

}
