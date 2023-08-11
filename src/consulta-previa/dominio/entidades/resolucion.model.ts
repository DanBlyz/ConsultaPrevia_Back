import { AutoMap } from '@automapper/classes';
import { Tramite } from './tramite.model';

export class Resolucion {
    @AutoMap()
    id: number;
  
    @AutoMap()
    fk_idTramite: number;
  
    @AutoMap()
    informe: string;
    
    @AutoMap()
    correlativo: string;
  
    @AutoMap()
    informeAprobado : boolean;
  
    @AutoMap()
    actoAdministrativo : boolean;
  
    @AutoMap()
    resolucionPdf : string;

    @AutoMap()
    flujo : string;

    @AutoMap()
    referencia : string;

    @AutoMap(() => [Tramite])
    tramite?: Tramite;
}
