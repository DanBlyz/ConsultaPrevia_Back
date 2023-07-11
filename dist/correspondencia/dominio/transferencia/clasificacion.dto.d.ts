export declare class ClasificacionDto {
    id: string;
    nombre: string;
    descripcion: string;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class ClasificacionCreacionDto {
    nombre: string;
    descripcion: string;
}
export declare class ClasificacionModificacionDto {
    nombre?: string;
    descripcion?: string;
}
