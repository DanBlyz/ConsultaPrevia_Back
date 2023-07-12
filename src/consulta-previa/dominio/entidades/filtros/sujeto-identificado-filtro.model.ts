import { AutoMap } from '@automapper/classes';

export class SujetoIdentificadoFiltro {

  @AutoMap()
  id?: number;

  @AutoMap()
  fk_idTramite?: number;

  @AutoMap()
  comunidad?: string;
  
  @AutoMap()
  representante?: string;

}
