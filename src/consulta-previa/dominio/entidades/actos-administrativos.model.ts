import { AutoMap } from '@automapper/classes';
import { Tramite } from './tramite.model';
import { PagoCpt } from './pago-cpt.model';
import { Viaje } from './viaje.model';
import { Resolucion } from './resolucion.model';

export class ActoAdministrativo {
    @AutoMap()
    id: number;
  
    @AutoMap()
    fk_idTramite: number;
    
    @AutoMap()
    fk_idResolucion: number;
  
    @AutoMap()
    viajeRealizado: boolean;
    
    @AutoMap()
    flujo: string;

    @AutoMap()
    estado: string;

    @AutoMap(() => [Tramite])
    tramite?: Tramite;

    @AutoMap(() => [Resolucion])
    resolucion?: Resolucion;

    @AutoMap(() => [PagoCpt])
    pagoCpt?: PagoCpt;

    @AutoMap(() => [Viaje])
    viaje?: Viaje;
}
