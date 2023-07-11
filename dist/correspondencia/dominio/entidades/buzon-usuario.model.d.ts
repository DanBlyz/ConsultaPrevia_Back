export declare class BuzonUsuario {
    id: number;
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
