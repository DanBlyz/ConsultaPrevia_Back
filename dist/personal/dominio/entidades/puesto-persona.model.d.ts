export declare class PuestoPersona {
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
