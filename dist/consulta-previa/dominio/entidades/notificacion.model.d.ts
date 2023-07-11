import { Reunion } from './reunion.model';
export declare class Notificacion {
    id: number;
    fk_idTramite: number;
    notificado: string;
    direccionDpto: string;
    notificacionPdf: string;
    flujo: string;
    listaReunion?: Reunion[];
}
