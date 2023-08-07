import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class ActoAdministrativoFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idTramite?: number;
    fk_idResolucion?: number;
    viajeRealizado?: boolean;
    flujo?: string;
    estado?: string;
}
