import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class PagoCptFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idActos?: number;
    pagoRealizado?: boolean;
    flujo?: string;
    encargado?: string;
    diasViaje?: number;
    tipoViaje?: string;
    montoTotal?: number;
    apm?: string;
}
