import { TramiteDto } from './tramite.dto';
export declare class ProvidenciaDto {
    id: number;
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    providenciaPdf: string;
    flujo: string;
    tramite?: TramiteDto[];
}
export declare class ProvidenciaCreacionDto {
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    providenciaPdf: string;
    flujo: string;
}
export declare class ProvidenciaModificacionDto {
    correlativo?: string;
    referencia?: string;
    providenciaPdf?: string;
    flujo?: string;
}
