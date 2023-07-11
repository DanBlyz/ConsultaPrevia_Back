export declare class BuzonUsuarioDto {
    id: string;
    tipoAcceso: string;
    usuario: string;
    nombre: string;
    fecInicio: Date;
    fecConclusion?: Date;
    estado: string;
    buzonId: number;
    refPersonaId: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class BuzonUsuarioCreacionDto {
    tipoAcceso: string;
    usuario: string;
    nombre: string;
    fecInicio: Date;
    fecConclusion?: Date;
    buzonId: number;
    refPersonaId: number;
}
export declare class BuzonUsuarioModificacionDto {
    tipoAcceso?: string;
    usuario?: string;
    nombre?: string;
    fecInicio?: Date;
    fecConclusion?: Date;
    estado?: string;
    buzonId?: number;
    refPersonaId?: number;
}
