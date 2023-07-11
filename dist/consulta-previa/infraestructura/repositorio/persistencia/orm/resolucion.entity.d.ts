import { AuditoriaEntity } from './base/auditoria.entity';
import { TramiteEntity } from './tramite.entity';
export declare class ResolucionEntity extends AuditoriaEntity {
    id: number;
    fk_idTramite: number;
    informe: string;
    resolucion: string;
    informeAprobado: boolean;
    actosAdministrativos: boolean;
    resolucionPdf: string;
    flujo: string;
    tramite: TramiteEntity;
}
