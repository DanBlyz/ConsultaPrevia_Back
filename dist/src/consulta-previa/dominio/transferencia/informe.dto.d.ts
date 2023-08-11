import { SujetoIdentificadoCreacionDto, SujetoIdentificadoDto, SujetoIdentificadoModificacionDto } from './sujeto-identificado.dto';
import { TramiteDto } from './tramite.dto';
export declare class InformeDto {
    id: number;
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    informePdf: string;
    tipoDocumento: string;
    flujo: string;
    tramite?: TramiteDto[];
    listaSujetoIdentificado?: SujetoIdentificadoDto[];
}
export declare class InformeCreacionDto {
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    informePdf: string;
    tipoDocumento: string;
    flujo: string;
    listaSujetoIdentificado?: SujetoIdentificadoCreacionDto[];
}
export declare class InformeModificacionDto {
    fk_idTramite?: number;
    correlativo?: string;
    referencia?: string;
    informePdf?: string;
    tipoDocumento?: string;
    flujo?: string;
    listaSujetoIdentificado?: SujetoIdentificadoModificacionDto[];
}
