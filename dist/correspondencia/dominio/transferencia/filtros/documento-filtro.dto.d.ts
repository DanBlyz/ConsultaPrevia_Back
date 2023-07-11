import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class DocumentoFiltroDto extends FiltroBaseDto {
    numero?: number;
    gestion?: number;
    cite?: string;
    citeExterno?: string;
    referencia?: string;
    prioridad?: string;
    observacion?: string;
    esBorrador?: boolean;
    estaImpreso?: boolean;
    tipoDocumentoId?: number;
}
