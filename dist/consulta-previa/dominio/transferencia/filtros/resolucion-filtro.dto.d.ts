import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class ResolucionFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idTramite?: number;
    informe?: string;
    resolucion?: string;
    informeAprobado?: boolean;
    ActoAdministrativo?: boolean;
    resolucionPdf?: string;
    flujo?: string;
    asunto?: string;
}
