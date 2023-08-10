import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class InformeFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idTramite?: number;
    correlativo?: string;
    referencia?: string;
    informePdf?: string;
    tipoDocumento?: string;
    flujo?: string;
}
