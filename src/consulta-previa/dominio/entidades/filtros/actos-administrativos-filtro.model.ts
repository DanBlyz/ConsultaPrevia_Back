import { AutoMap } from '@automapper/classes';

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

}
