import { AutoMap } from '@automapper/classes';
import { SujetoIdentificado } from './sujeto-identificado.model';

export class Informe {
    @AutoMap()
    id: number;
  
    @AutoMap()
    fk_idTramite: number;
  
    @AutoMap()
    correlativo: string;
    
    @AutoMap()
    referencia: string;
  
    @AutoMap()
    informePdf: string;
  
    @AutoMap()
    tipoDocumento: string;

    @AutoMap()
    flujo: string;

    @AutoMap(() => [SujetoIdentificado])
    listaSujetoIdentificado?: SujetoIdentificado[];
}
