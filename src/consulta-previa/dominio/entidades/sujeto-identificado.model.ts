import { AutoMap } from '@automapper/classes';
import { Documento } from './documento.model';

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

  @AutoMap(() => [Documento])
  documento?: Documento;
}
