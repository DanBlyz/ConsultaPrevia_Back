export declare class UniOrganizacionalDto {
    id: number;
    codigo: string;
    sigla: string;
    nombre: string;
    estaActiva: boolean;
    uniOrganizacionalSuperiorId?: number;
    uniOrganizacionalSuperiorNombre: string;
    numPuestos: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class UniOrganizacionalCreacionDto {
    codigo: string;
    sigla: string;
    nombre: string;
    estaActiva: boolean;
    uniOrganizacionalSuperiorId?: number;
}
export declare class UniOrganizacionalModificacionDto {
    codigo?: string;
    sigla?: string;
    nombre?: string;
    estaActiva?: boolean;
    uniOrganizacionalSuperiorId?: number;
}
