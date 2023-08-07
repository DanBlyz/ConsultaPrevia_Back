import { AuditoriaEntity } from './base/auditoria.entity';
import { NotificacionEntity } from './notificacion.entity';
export declare class ReunionEntity extends AuditoriaEntity {
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
    notificacion: NotificacionEntity;
}
