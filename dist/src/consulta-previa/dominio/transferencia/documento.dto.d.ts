import { TramiteDto } from './tramite.dto';
import { SujetoIdentificadoCreacionDto, SujetoIdentificadoDto } from './sujeto-identificado.dto';
export declare class DocumentoDto {
    id: number;
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    documentoPdf: string;
    tipoDocumento: string;
    flujo: string;
    estado: string;
    tramite?: TramiteDto[];
    listaSujetoIdentificado?: SujetoIdentificadoDto[];
}
export declare class DocumentoCreacionDto {
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    documentoPdf: string;
    tipoDocumento: string;
    flujo: string;
    estado?: string;
    listaSujetoIdentificado?: SujetoIdentificadoCreacionDto[];
}
export declare class DocumentoModificacionDto {
    correlativo?: string;
    referencia?: string;
    documentoPdf?: string;
    tipoDocumento?: string;
    flujo?: string;
    estado?: string;
}
