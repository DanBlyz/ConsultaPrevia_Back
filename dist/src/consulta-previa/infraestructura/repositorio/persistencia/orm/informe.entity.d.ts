import { AuditoriaEntity } from './base/auditoria.entity';
export declare class InformeEntity extends AuditoriaEntity {
    id: number;
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    informePdf: string;
    tipoDocumento: string;
    flujo: string;
}
