import { AutoMap } from '@automapper/classes';

export class SujetoIdentificadoFiltro {

  @AutoMap()
  id?: number;

  @AutoMap()
  fk_idInforme?: number;

  @AutoMap()
  comunidad?: string;
  
  @AutoMap()
  autoridad?: string;

  @AutoMap()
  telefono?: number;

}
