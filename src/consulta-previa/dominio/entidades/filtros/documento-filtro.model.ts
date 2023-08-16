import { AutoMap } from '@automapper/classes';
import { TramiteFiltro } from './tramite-filtro.model';

export class DocumentoFiltro {

  @AutoMap()
  id?: number;

  @AutoMap()
  fk_idTramite?: number;

  @AutoMap()
  correlativo?: string;
  
  @AutoMap()
  referencia?: string;

  @AutoMap()
  documentoPdf?: string;

  @AutoMap()
  tipoDocumento?: string;

  @AutoMap()
  flujo?: string;

  @AutoMap()
  estado?: string;

  @AutoMap()
  tramite?: TramiteFiltro;

}
