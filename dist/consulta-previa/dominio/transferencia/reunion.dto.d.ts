import { NotificacionDto } from './notificacion.dto';
export declare class ReunionDto {
    id: number;
    fk_idNotificacion: number;
    nroReunion: string;
    acuerdo: boolean;
    motivo: string;
    reunionRealizada: boolean;
    actaReunionPdf: string;
    encargado: string;
    notificacion?: NotificacionDto[];
}
export declare class ReunionCreacionDto {
    fk_idNotificacion: number;
    nroReunion: string;
    acuerdo: boolean;
    motivo: string;
    reunionRealizada: boolean;
    actaReunionPdf: string;
    encargado: string;
}
export declare class ReunionModificacionDto {
    nroReunion?: string;
    acuerdo?: boolean;
    motivo?: string;
    reunionRealizada?: boolean;
    actaReunionPdf?: string;
    encargado?: string;
}
