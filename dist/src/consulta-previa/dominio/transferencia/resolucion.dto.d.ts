export declare class ResolucionDto {
    id: number;
    fk_idTramite: number;
    informe: string;
    correlativo: string;
    informeAprobado: boolean;
    actoAdministrativo: boolean;
    resolucionPdf: string;
    flujo: string;
    referencia: string;
}
export declare class ResolucionCreacionDto {
    fk_idTramite: number;
    informe: string;
    correlativo: string;
    informeAprobado: boolean;
    actoAdministrativo: boolean;
    resolucionPdf: string;
    flujo: string;
    referencia: string;
}
export declare class ResolucionModificacionDto {
    fk_idTramite?: number;
    informe?: string;
    correlativo?: string;
    informeAprobado?: boolean;
    actoAdministrativo?: boolean;
    resolucionPdf?: string;
    flujo?: string;
    referencia?: string;
}
