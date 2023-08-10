import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
import { TramiteFiltroDto } from './tramite-filtro.dto';
export declare class ProvidenciaFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idTramite?: number;
    correlativo?: string;
    referencia?: string;
    providenciaPdf?: string;
    flujo?: string;
    tramite?: TramiteFiltroDto[];
}
