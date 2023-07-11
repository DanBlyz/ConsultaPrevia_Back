export declare class ContactoDto {
    id: string;
    nombre: string;
    puesto: string;
    uniOrganizacional: string;
    entidad: string;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class ContactoCreacionDto {
    nombre: string;
    puesto: string;
    uniOrganizacional: string;
    entidad: string;
}
export declare class ContactoModificacionDto {
    nombre?: string;
    puesto?: string;
    uniOrganizacional?: string;
    entidad?: string;
}
