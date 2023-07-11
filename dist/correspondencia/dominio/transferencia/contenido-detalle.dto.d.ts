export declare class ContenidoDetalleDto {
    id: number;
    variable: string;
    valor: string;
    documentoId: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class ContenidoDetalleCreacionDto {
    variable: string;
    valor: string;
    documentoId: number;
}
export declare class ContenidoDetalleModificacionDto {
    variable?: string;
    valor?: string;
}
