import { Tramite } from './tramite.model';
import { SujetoIdentificado } from './sujeto-identificado.model';
export declare class Documento {
    id: number;
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    documentoPdf: string;
    tipoDocumento: string;
    flujo: string;
    estado: string;
    tramite?: Tramite;
    listaSujetoIdentificado?: SujetoIdentificado[];
}
