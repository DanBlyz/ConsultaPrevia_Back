import { AuditoriaEntity } from './base/auditoria.entity';
import { TramiteEntity } from './tramite.entity';
export declare class InformeEntity extends AuditoriaEntity {
    id: number;
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    informePdf: string;
    tipoDocumento: string;
    flujo: string;
    tramite: TramiteEntity;
}
