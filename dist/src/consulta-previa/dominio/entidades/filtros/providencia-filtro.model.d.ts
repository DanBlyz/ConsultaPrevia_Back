import { TramiteFiltro } from './tramite-filtro.model';
export declare class ProvidenciaFiltro {
    id?: number;
    fk_idTramite?: number;
    correlativo?: string;
    referencia?: string;
    providenciaPdf?: string;
    flujo?: string;
    tramite?: TramiteFiltro;
}
