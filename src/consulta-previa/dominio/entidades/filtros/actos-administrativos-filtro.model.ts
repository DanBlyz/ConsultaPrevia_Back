import { AutoMap } from '@automapper/classes';

export class ActoAdministrativoFiltro {

  @AutoMap()
  id?: number;

  @AutoMap()
  fk_idTramite?: number;

  @AutoMap()
  viajeRealizado?: boolean;
  
  @AutoMap()
  flujo?: string;

  @AutoMap()
  encargado?: string;

  /*@AutoMap()
  pagoRealizado?: boolean;*/

}
