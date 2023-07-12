import { TramiteDto } from './tramite.dto';
import { PagoCptDto } from './pago-cpt.dto';
export declare class ActoAdministrativoDto {
    id: number;
    fk_idTramite: number;
    viajeRealizado: boolean;
    flujo: string;
    encargado: string;
    tramite?: TramiteDto[];
    pagoCpt?: PagoCptDto[];
}
export declare class ActoAdministrativoCreacionDto {
    fk_idTramite: number;
    viajeRealizado: boolean;
    flujo: string;
    encargado: string;
}
export declare class ActoAdministrativoModificacionDto {
    fk_idTramite?: number;
    viajeRealizado?: boolean;
    flujo?: string;
    encargado?: string;
    pagoRealizado?: boolean;
}
