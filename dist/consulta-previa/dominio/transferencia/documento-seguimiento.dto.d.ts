export declare class DocumentoSeguimientoDto {
    id: number;
    accion: string;
    instante: Date;
    usuario: string;
    documentoId: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class DocumentoSeguimientoCreacionDto {
    accion: string;
    instante: Date;
    usuario: string;
    documentoId: number;
}
export declare class DocumentoSeguimientoModificacionDto {
    accion?: string;
    instante?: Date;
    usuario?: string;
}
