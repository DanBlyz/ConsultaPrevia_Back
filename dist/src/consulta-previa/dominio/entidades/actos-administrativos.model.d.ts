import { Tramite } from './tramite.model';
import { PagoCpt } from './pago-cpt.model';
import { Viaje } from './viaje.model';
import { Resolucion } from './resolucion.model';
export declare class ActoAdministrativo {
    id: number;
    fk_idTramite: number;
    fk_idResolucion: number;
    viajeRealizado: boolean;
    flujo: string;
    estado: string;
    tramite?: Tramite;
    resolucion?: Resolucion;
    pagoCpt?: PagoCpt;
    viaje?: Viaje;
}
