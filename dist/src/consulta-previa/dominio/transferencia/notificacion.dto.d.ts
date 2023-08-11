import { ReunionDto } from './reunion.dto';
import { TramiteDto } from './tramite.dto';
export declare class NotificacionDto {
    id: number;
    fk_idTramite: number;
    notificado: string;
    direccionDpto: string;
    notificacionPdf: string;
    flujo: string;
    representanteMinero: boolean;
    representanteComunidad: boolean;
    sifde: boolean;
    comunidad?: string;
    nroReunion?: string;
    reunion?: ReunionDto[];
    tramite?: TramiteDto[];
}
export declare class NotificacionCreacionDto {
    fk_idTramite: number;
    notificado: string;
    direccionDpto: string;
    notificacionPdf: string;
    flujo: string;
    representanteMinero: boolean;
    representanteComunidad: boolean;
    sifde: boolean;
    comunidad?: string;
    nroReunion?: string;
}
export declare class NotificacionModificacionDto {
    notificado?: string;
    direccionDpto?: string;
    notificacionPdf?: string;
    flujo?: string;
    representanteMinero?: boolean;
    representanteComunidad?: boolean;
    sifde?: boolean;
    comunidad?: string;
    nroReunion?: string;
}
