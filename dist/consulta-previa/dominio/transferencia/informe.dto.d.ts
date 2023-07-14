import { SujetoIdentificadoCreacionDto, SujetoIdentificadoDto, SujetoIdentificadoModificacionDto } from './sujeto-identificado.dto';
export declare class InformeDto {
    id: number;
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    informePdf: string;
    asunto: string;
    encargado: string;
    flujo: string;
    listaSujetoIdentificado?: SujetoIdentificadoDto[];
}
export declare class InformeCreacionDto {
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    informePdf: string;
    asunto: string;
    encargado: string;
    flujo: string;
    listaSujetoIdentificado?: SujetoIdentificadoCreacionDto[];
}
export declare class InformeModificacionDto {
    fk_idTramite: number;
    correlativo?: string;
    referencia?: string;
    informePdf?: string;
    asunto?: string;
    encargado?: string;
    flujo?: string;
    listaSujetoIdentificado?: SujetoIdentificadoModificacionDto[];
}
