import { Tramite } from './tramite.model';
import { PagoCpt } from './pago-cpt.model';
export declare class ActoAdministrativo {
    id: number;
    fk_idTramite: number;
    viajeRealizado: boolean;
    flujo: string;
    encargado: string;
    pagoRealizado: boolean;
    tramite?: Tramite;
    pagoCpt?: PagoCpt;
}
