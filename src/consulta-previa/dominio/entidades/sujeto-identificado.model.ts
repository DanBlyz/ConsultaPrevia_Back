import { AutoMap } from '@automapper/classes';
import { Informe } from './informe.model';

export class SujetoIdentificado {

  @AutoMap()
  id: number;

  @AutoMap()
  fk_idDocumento: number;

  @AutoMap()
  comunidad: string;
  
  @AutoMap()
  autoridad: string;

  @AutoMap()
  telefono: number;

  @AutoMap(() => [Informe])
  informe?: Informe;
}
