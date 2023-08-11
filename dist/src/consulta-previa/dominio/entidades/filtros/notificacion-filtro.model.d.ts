import { TramiteFiltro } from './tramite-filtro.model';
export declare class NotificacionFiltro {
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
    tramite?: TramiteFiltro;
}
