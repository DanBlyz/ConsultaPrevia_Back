export declare class RolDto {
    id: string;
    codigo: string;
    nombre: string;
    grupoId: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class RolCreacionDto {
    codigo: string;
    nombre: string;
    grupoId: number;
}
export declare class RolModificacionDto {
    codigo?: string;
    nombre?: string;
    grupoId?: number;
}
