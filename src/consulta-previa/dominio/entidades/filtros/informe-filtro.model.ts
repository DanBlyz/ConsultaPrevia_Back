import { AutoMap } from '@automapper/classes';

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
  asunto?: string;

  @AutoMap()
  encargado?: string;

  @AutoMap()
  flujo?: string;
  
}
