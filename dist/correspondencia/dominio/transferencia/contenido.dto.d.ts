export declare class ContenidoDto {
    id: number;
    version: number;
    planillaId: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class ContenidoCreacionDto {
    version: number;
    planillaId: number;
}
export declare class ContenidoModificacionDto {
    version?: number;
}
