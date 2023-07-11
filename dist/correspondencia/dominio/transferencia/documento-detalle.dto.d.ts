export declare class DocumentoDetalleDto {
    id: number;
    tipo: string;
    valor: string;
    documentoId: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class DocumentoDetalleCreacionDto {
    tipo: string;
    valor: string;
    documentoId: number;
}
export declare class DocumentoDetalleModificacionDto {
    tipo?: string;
    valor?: string;
}
