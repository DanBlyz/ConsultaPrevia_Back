import { TramiteFiltro } from './tramite-filtro.model';
export declare class ResolucionFiltro {
    id?: number;
    fk_idTramite?: number;
    informe?: string;
    correlativo?: string;
    informeAprobado?: boolean;
    actoAdministrativo?: boolean;
    resolucionPdf?: string;
    flujo?: string;
    referencia?: string;
    tramite?: TramiteFiltro;
}
