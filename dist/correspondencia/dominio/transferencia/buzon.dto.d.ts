export declare class BuzonDto {
    id: string;
    uniOrganizacional: string;
    puesto: string;
    estado: string;
    refUniOrganizacionalId: number;
    refPuestoId: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class BuzonCreacionDto {
    uniOrganizacional: string;
    puesto: string;
    estado: string;
    refUniOrganizacionalId: number;
    refPuestoId: number;
}
export declare class BuzonModificacionDto {
    uniOrganizacional: string;
    puesto: string;
    estado: string;
    refUniOrganizacionalId: number;
    refPuestoId: number;
}
