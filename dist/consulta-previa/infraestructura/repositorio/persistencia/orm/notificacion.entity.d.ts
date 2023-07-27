import { AuditoriaEntity } from './base/auditoria.entity';
import { TramiteEntity } from './tramite.entity';
import { ReunionEntity } from './reunion.entity';
export declare class NotificacionEntity extends AuditoriaEntity {
    id: number;
    fk_idTramite: number;
    notificado: string;
    direccionDpto: string;
    notificacionPdf: string;
    flujo: string;
    representanteMinero: boolean;
    representanteComunidad: boolean;
    sifde: boolean;
    comunidad: string;
    nroReunion: string;
    reunion: ReunionEntity;
    tramite: TramiteEntity;
}
