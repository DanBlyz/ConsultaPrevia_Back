import { AuditoriaEntity } from './base/auditoria.entity';
import { NotificacionEntity } from './notificacion.entity';
export declare class ReunionEntity extends AuditoriaEntity {
    id: number;
    nroReunion: string;
    acuerdo: boolean;
    motivo: string;
    reunionRealizada: boolean;
    actaReunionPdf: string;
    encargado: string;
    notificacion: NotificacionEntity;
}
