import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class ProvidenciaFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idTramite?: number;
    correlativo?: string;
    referencia?: string;
    providenciaPdf?: string;
    flujo?: string;
}
