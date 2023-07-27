import { SujetoIdentificado } from './sujeto-identificado.model';
export declare class Informe {
    id: number;
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    informePdf: string;
    asunto: string;
    flujo: string;
    listaSujetoIdentificado?: SujetoIdentificado[];
}
