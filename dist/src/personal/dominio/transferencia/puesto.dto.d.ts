export declare class PuestoDto {
    id: number;
    nombre: string;
    descripcion: string;
    nivelJerarquico: number;
    estaActivo: boolean;
    uniOrganizacionalId: number;
    uniOrganizacionalNombre: string;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class PuestoCreacionDto {
    nombre: string;
    descripcion: string;
    nivelJerarquico: number;
    estaActivo: boolean;
    uniOrganizacionalId: number;
}
export declare class PuestoModificacionDto {
    nombre?: string;
    descripcion?: string;
    nivelJerarquico?: number;
    estaActivo?: boolean;
    uniOrganizacionalId?: number;
}
