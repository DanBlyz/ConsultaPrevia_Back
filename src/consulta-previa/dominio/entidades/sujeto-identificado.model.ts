import { AutoMap } from '@automapper/classes';

export class SujetoIdentificado {

  @AutoMap()
  id: number;

  @AutoMap()
  fk_idInforme: number;

  @AutoMap()
  comunidad: string;
  
  @AutoMap()
  representante: string;
}
