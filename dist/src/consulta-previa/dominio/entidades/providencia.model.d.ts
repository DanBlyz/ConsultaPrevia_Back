import { Tramite } from './tramite.model';
export declare class Providencia {
    id: number;
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    providenciaPdf: string;
    flujo: string;
    tramite?: Tramite;
}
