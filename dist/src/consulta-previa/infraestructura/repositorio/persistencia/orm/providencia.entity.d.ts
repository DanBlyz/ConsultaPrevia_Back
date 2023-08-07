import { AuditoriaEntity } from './base/auditoria.entity';
import { TramiteEntity } from './tramite.entity';
export declare class ProvidenciaEntity extends AuditoriaEntity {
    id: number;
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    providenciaPdf: string;
    flujo: string;
    tramite: TramiteEntity;
}
