import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class ReunionFiltroDto extends FiltroBaseDto {
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
}
