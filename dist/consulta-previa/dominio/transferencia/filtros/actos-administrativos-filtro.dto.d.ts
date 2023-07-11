import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class ActoAdministrativoFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idTramite?: number;
    viajeRealizado?: boolean;
    flujo?: string;
    encargado?: string;
    pagoRealizado?: boolean;
}
