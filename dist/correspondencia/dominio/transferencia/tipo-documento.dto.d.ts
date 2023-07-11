export declare class TipoDocumentoDto {
    id: string;
    sigla: string;
    nombre: string;
    descripcion: string;
    estaActivo: boolean;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class TipoDocumentoCreacionDto {
    sigla: string;
    nombre: string;
    descripcion: string;
    estaActivo: boolean;
}
export declare class TipoDocumentoModificacionDto {
    sigla?: string;
    nombre?: string;
    descripcion?: string;
    estaActivo?: boolean;
}
