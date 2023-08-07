export declare class PuestoPersonaDto {
    id: number;
    tipoMovilidad: string;
    tipoLaboral: string;
    fecInicio: Date;
    fecConclusion?: Date;
    esInterinato: boolean;
    tieneDesvinculacion: boolean;
    estado: string;
    puestoId?: number;
    personaId: number;
    uniOrganizacionalId: number;
    puestoNombre?: string;
    uniOrganizacionalNombre: string;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class PuestoPersonaCreacionDto {
    tipoMovilidad: string;
    tipoLaboral: string;
    fecInicio: Date;
    fecConclusion?: Date;
    esInterinato: boolean;
    estado: string;
    puestoId?: number;
    personaId: number;
    uniOrganizacionalId: number;
}
export declare class PuestoPersonaModificacionDto {
    tipoMovilidad?: string;
    tipoLaboral?: string;
    fecInicio?: Date;
    fecConclusion?: Date;
    esInterinato?: boolean;
    tieneDesvinculacion?: boolean;
    estado?: string;
    puestoId?: number;
    personaId?: number;
    uniOrganizacionalId?: number;
}
