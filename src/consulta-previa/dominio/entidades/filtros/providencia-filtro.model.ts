import { AutoMap } from '@automapper/classes';

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

}
