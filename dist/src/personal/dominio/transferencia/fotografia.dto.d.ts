import { PersonaDto } from '.';
export declare class FotografiaDto {
    id: number;
    archivo: string;
    tipoMime: string;
    extension: string;
    tamanio: number;
    persona?: PersonaDto;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class FotografiaCreacionDto {
    id: number;
    archivo: string;
    tipoMime: string;
    extension: string;
    tamanio: number;
}
export declare class FotografiaModificacionDto {
    archivo?: string;
    tipoMime?: string;
    extension?: string;
    tamanio?: number;
}
