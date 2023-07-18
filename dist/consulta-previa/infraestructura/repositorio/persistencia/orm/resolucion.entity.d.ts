import { AuditoriaEntity } from './base/auditoria.entity';
import { TramiteEntity } from './tramite.entity';
export declare class ResolucionEntity extends AuditoriaEntity {
    id: number;
    fk_idTramite: number;
    informe: string;
    resolucion: string;
    informeAprobado: boolean;
    actoAdministrativo: boolean;
    resolucionPdf: string;
    flujo: string;
    asunto: string;
    tramite: TramiteEntity;
}
