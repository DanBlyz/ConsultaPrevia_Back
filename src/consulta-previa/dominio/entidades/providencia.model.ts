import { AutoMap } from '@automapper/classes';
import { Tramite } from './tramite.model';

export class Providencia {
    @AutoMap()
    id: number;
  
    @AutoMap()
    fk_idTramite: number;
  
    @AutoMap()
    correlativo: string;
    
    @AutoMap()
    referencia: string;
  
    @AutoMap()
    providenciaPdf: string;
      
    @AutoMap()
    flujo: string;

    @AutoMap(() => [Tramite])
    tramite?: Tramite;
}
