export declare class PlantillaDto {
    id: string;
    fecha: Date;
    version: number;
    estructura: string;
    tipoDocumentoId: number;
    tipoDocumentoNombre: string;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class PlantillaCreacionDto {
    version: number;
    estructura: string;
    tipoDocumentoId: number;
}
export declare class PlantillaModificacionDto {
    version?: number;
    estructura?: string;
    tipoDocumentoId?: number;
}
