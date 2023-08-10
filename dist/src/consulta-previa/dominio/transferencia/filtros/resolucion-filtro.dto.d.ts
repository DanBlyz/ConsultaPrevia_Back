import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class ResolucionFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idTramite?: number;
    informe?: string;
    correlativo?: string;
    informeAprobado?: boolean;
    actoAdministrativo?: boolean;
    resolucionPdf?: string;
    flujo?: string;
    referencia?: string;
}
