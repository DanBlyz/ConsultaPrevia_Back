export declare class ResolucionDto {
    id: number;
    fk_idTramite: number;
    informe: string;
    resolucion: string;
    informeAprobado: boolean;
    ActoAdministrativo: boolean;
    resolucionPdf: string;
    flujo: string;
    asunto: string;
}
export declare class ResolucionCreacionDto {
    fk_idTramite: number;
    informe: string;
    resolucion: string;
    informeAprobado: boolean;
    ActoAdministrativo: boolean;
    resolucionPdf: string;
    flujo: string;
    asunto: string;
}
export declare class ResolucionModificacionDto {
    informe?: string;
    resolucion?: string;
    informeAprobado?: boolean;
    ActoAdministrativo?: boolean;
    resolucionPdf?: string;
    flujo?: string;
    asunto?: string;
}
