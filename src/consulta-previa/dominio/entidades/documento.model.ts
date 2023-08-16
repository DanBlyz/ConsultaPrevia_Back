import { AutoMap } from '@automapper/classes';
import { Tramite } from './tramite.model';
import { SujetoIdentificado } from './sujeto-identificado.model';

export class Documento {
    @AutoMap()
    id: number;
  
    @AutoMap()
    fk_idTramite: number;
  
    @AutoMap()
    correlativo: string;
    
    @AutoMap()
    referencia: string;
  
    @AutoMap()
    documentoPdf: string;

    @AutoMap()
    tipoDocumento: string;
      
    @AutoMap()
    flujo: string;

    @AutoMap()
    estado: string;

    @AutoMap(() => [Tramite])
    tramite?: Tramite;

    @AutoMap(() => [SujetoIdentificado])
    listaSujetoIdentificado?: SujetoIdentificado[];
}
