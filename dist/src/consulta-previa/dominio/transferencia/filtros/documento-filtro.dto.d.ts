import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
import { TramiteFiltroDto } from './tramite-filtro.dto';
export declare class DocumentoFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idTramite?: number;
    correlativo?: string;
    referencia?: string;
    documentoPdf?: string;
    tipoDocumento?: string;
    flujo?: string;
    tramite?: TramiteFiltroDto[];
}
