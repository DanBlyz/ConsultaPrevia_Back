import { AutoMap } from '@automapper/classes';
import { Tramite } from './tramite.model';

export class ActoAdministrativo {
    @AutoMap()
    id: number;
  
    @AutoMap()
    fk_idTramite: number;
  
    @AutoMap()
    viajeRealizado: boolean;
    
    @AutoMap()
    flujo: string;
  
    @AutoMap()
    encargado: string;

    @AutoMap()
    pagoRealizado: boolean;

    @AutoMap(() => [Tramite])
    tramite?: Tramite;
}
