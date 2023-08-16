import { TramiteFiltro } from './tramite-filtro.model';
export declare class DocumentoFiltro {
    id?: number;
    fk_idTramite?: number;
    correlativo?: string;
    referencia?: string;
    documentoPdf?: string;
    tipoDocumento?: string;
    flujo?: string;
    estado?: string;
    tramite?: TramiteFiltro;
}
