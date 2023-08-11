import { TramiteFiltro } from './tramite-filtro.model';
export declare class InformeFiltro {
    id?: number;
    fk_idTramite?: number;
    correlativo?: string;
    referencia?: string;
    informePdf?: string;
    tipoDocumento?: string;
    flujo?: string;
    tramite?: TramiteFiltro;
}
