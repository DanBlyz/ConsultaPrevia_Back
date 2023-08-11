import { Tramite } from './tramite.model';
export declare class Resolucion {
    id: number;
    fk_idTramite: number;
    informe: string;
    correlativo: string;
    informeAprobado: boolean;
    actoAdministrativo: boolean;
    resolucionPdf: string;
    flujo: string;
    referencia: string;
    tramite?: Tramite;
}
