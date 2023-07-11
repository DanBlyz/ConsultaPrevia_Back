export declare class EtiquetaDto {
    id: number;
    nombre: string;
    descripcion: string;
    usuario: string;
    esPublica: boolean;
    documentoId: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class EtiquetaCreacionDto {
    nombre: string;
    descripcion: string;
    usuario: string;
    esPublica: boolean;
    documentoId: number;
}
export declare class EtiquetaModificacionDto {
    nombre?: string;
    descripcion?: string;
    usuario?: string;
    esPublica?: boolean;
}
