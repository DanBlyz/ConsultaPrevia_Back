import { NotificacionFiltro } from './notificacion-filtro.model';
export declare class ReunionFiltro {
    id?: number;
    fk_idNotificacion?: number;
    nroReunion?: string;
    conAcuerdo?: boolean;
    sinAcuerdo?: boolean;
    motivo?: string;
    reunionRealizada?: boolean;
    actaReunionPdf?: string;
    estado?: string;
    flujo?: string;
    notificacion?: NotificacionFiltro;
}
