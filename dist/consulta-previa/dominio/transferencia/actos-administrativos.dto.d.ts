import { TramiteDto } from './tramite.dto';
export declare class ActoAdministrativoDto {
    id: number;
    fk_idTramite: number;
    viajeRealizado: boolean;
    flujo: string;
    encargado: string;
    pagoRealizado: boolean;
    tramite?: TramiteDto[];
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
