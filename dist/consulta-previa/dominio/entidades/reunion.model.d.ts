import { Notificacion } from './notificacion.model';
export declare class Reunion {
    id: number;
    fk_idNotificacion: number;
    nroReunion: string;
    acuerdo: boolean;
    motivo: string;
    reunionRealizada: boolean;
    actaReunionPdf: string;
    estado: string;
    flujo: string;
    notificacion?: Notificacion;
}
