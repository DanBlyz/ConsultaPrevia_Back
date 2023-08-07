export declare class InfoLaboralDto {
    id: number;
    tipoLaboral: string;
    correoInstitucional?: string;
    numInterno?: string;
    estado: string;
    cuenta?: string;
    uniOrganizacionalId: number;
    puestoId: number;
    uniOrganizacionalNombre?: string;
    puestoNombre?: string;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class InfoLaboralCreacionDto {
    tipoLaboral: string;
    correoInstitucional?: string;
    numInterno?: string;
    estado: string;
    cuenta?: string;
    uniOrganizacionalId: number;
    puestoId: number;
}
export declare class InfoLaboralModificacionDto {
    tipoLaboral?: string;
    correoInstitucional?: string;
    numInterno?: string;
    estado?: string;
    cuenta?: string;
    uniOrganizacionalId?: number;
    puestoId?: number;
}
