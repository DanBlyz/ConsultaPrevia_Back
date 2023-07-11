export declare class GrupoDto {
    id: string;
    codigo: string;
    nombre: string;
    descripcion: string;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class GrupoCreacionDto {
    codigo: string;
    nombre: string;
    descripcion: string;
}
export declare class GrupoModificacionDto {
    codigo?: string;
    nombre?: string;
    descripcion?: string;
}
