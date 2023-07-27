import { TramiteDto } from './tramite.dto';
import { PagoCptDto } from './pago-cpt.dto';
import { ViajeDto } from './viaje.dto';
import { ResolucionDto } from './resolucion.dto';
export declare class ActoAdministrativoDto {
    id: number;
    fk_idTramite: number;
    fk_idResolucion: number;
    viajeRealizado: boolean;
    flujo: string;
    estado: string;
    tramite?: TramiteDto[];
    resolucion?: ResolucionDto[];
    pagoCpt?: PagoCptDto[];
    viaje?: ViajeDto[];
}
export declare class ActoAdministrativoCreacionDto {
    fk_idTramite?: number;
    fk_idResolucion?: number;
    viajeRealizado: boolean;
    flujo: string;
}
export declare class ActoAdministrativoModificacionDto {
    fk_idTramite?: number;
    fk_idResolucion?: number;
    viajeRealizado?: boolean;
    flujo?: string;
    estado?: string;
}
