import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
import { TramiteFiltroDto } from './tramite-filtro.dto';
export declare class InformeFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idTramite?: number;
    correlativo?: string;
    referencia?: string;
    informePdf?: string;
    tipoDocumento?: string;
    flujo?: string;
    tramite?: TramiteFiltroDto[];
}
