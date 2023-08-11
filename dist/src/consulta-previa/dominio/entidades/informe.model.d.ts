import { SujetoIdentificado } from './sujeto-identificado.model';
import { Tramite } from './tramite.model';
export declare class Informe {
    id: number;
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    informePdf: string;
    tipoDocumento: string;
    flujo: string;
    tramite?: Tramite;
    listaSujetoIdentificado?: SujetoIdentificado[];
}
