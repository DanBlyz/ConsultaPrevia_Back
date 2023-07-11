export declare class ParticipanteDto {
    id: string;
    tipo: string;
    nombre: string;
    puesto: string;
    uniOrganizacional: string;
    entidad: string;
    documentoId: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class ParticipanteCreacionDto {
    tipo: string;
    nombre: string;
    puesto: string;
    uniOrganizacional: string;
    entidad: string;
    documentoId: number;
}
export declare class ParticipanteModificacionDto {
    tipo?: string;
    nombre?: string;
    puesto?: string;
    uniOrganizacional?: string;
    entidad?: string;
    documentoId?: number;
}
