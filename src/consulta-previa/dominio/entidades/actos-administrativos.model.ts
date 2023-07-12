import { AutoMap } from '@automapper/classes';
import { Tramite } from './tramite.model';
import { PagoCpt } from './pago-cpt.model';
import { Viaje } from './viaje.model';

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

   /* @AutoMap()
    pagoRealizado: boolean;*/

    @AutoMap(() => [Tramite])
    tramite?: Tramite;

    @AutoMap(() => [PagoCpt])
    pagoCpt?: PagoCpt;

    @AutoMap(() => [Viaje])
    viaje?: Viaje;
}
