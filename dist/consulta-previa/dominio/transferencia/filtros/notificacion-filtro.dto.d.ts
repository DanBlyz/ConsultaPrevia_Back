import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class NotificacionFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idTramite?: number;
    notificado?: string;
    direccionDpto?: string;
    notificacionPdf?: string;
    flujo?: string;
    representanteMinero?: boolean;
    representanteComunidad?: boolean;
    sifde?: boolean;
    comunidad?: string;
    nroReunion?: string;
}
