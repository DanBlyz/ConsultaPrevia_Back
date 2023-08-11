import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
import { NotificacionFiltroDto } from './notificacion-filtro.dto';
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
    notificacion?: NotificacionFiltroDto[];
}
