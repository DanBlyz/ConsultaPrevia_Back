import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
import { TramiteFiltroDto } from './tramite-filtro.dto';
export declare class ActoAdministrativoFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idTramite?: number;
    fk_idResolucion?: number;
    viajeRealizado?: boolean;
    flujo?: string;
    estado?: string;
    tramite?: TramiteFiltroDto[];
}
