import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class ReunionFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idNotificacion?: number;
    nroReunion?: string;
    acuerdo?: boolean;
    motivo?: string;
    reunionRealizada?: boolean;
    actaReunionPdf?: string;
    encargado?: string;
    estado?: string;
    flujo?: string;
}
