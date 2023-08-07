import { NotificacionDto, NotificacionModificacionDto } from './notificacion.dto';
export declare class ReunionDto {
    id: number;
    fk_idNotificacion: number;
    nroReunion: string;
    conAcuerdo: boolean;
    sinAcuerdo: boolean;
    motivo: string;
    reunionRealizada: boolean;
    actaReunionPdf: string;
    estado: string;
    flujo: string;
    notificacion?: NotificacionDto[];
}
export declare class ReunionCreacionDto {
    fk_idNotificacion: number;
    nroReunion: string;
    conAcuerdo?: boolean;
    sinAcuerdo?: boolean;
    motivo?: string;
    reunionRealizada?: boolean;
    actaReunionPdf?: string;
    estado?: string;
    flujo: string;
}
export declare class ReunionModificacionDto {
    fk_idNotificacion: number;
    nroReunion?: string;
    conAcuerdo?: boolean;
    sinAcuerdo?: boolean;
    motivo?: string;
    reunionRealizada?: boolean;
    actaReunionPdf?: string;
    estado?: string;
    flujo?: string;
    notificacion?: NotificacionModificacionDto[];
}
