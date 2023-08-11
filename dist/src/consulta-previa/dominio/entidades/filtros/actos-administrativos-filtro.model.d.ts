import { TramiteFiltro } from './tramite-filtro.model';
export declare class ActoAdministrativoFiltro {
    id?: number;
    fk_idTramite?: number;
    fk_idResolucion?: number;
    viajeRealizado?: boolean;
    flujo?: string;
    estado?: string;
    tramite?: TramiteFiltro;
}
