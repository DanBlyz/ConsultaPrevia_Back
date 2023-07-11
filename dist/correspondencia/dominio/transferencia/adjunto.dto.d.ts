export declare class AdjuntoDto {
    id: string;
    tipo: string;
    codigo: string;
    tipoMime: string;
    tamanio: number;
    extension: string;
    estaFirmado: boolean;
    nomPublico: string;
    nomPrivado: string;
    estado: string;
    documentoId: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class AdjuntoCreacionDto {
    tipo: string;
    codigo: string;
    tipoMime: string;
    tamanio: number;
    extension: string;
    estaFirmado: boolean;
    nomPublico: string;
    nomPrivado: string;
    estado: string;
    documentoId: number;
}
export declare class AdjuntoModificacionDto {
    tipo?: string;
    codigo?: string;
    tipoMime?: string;
    tamanio?: number;
    extension?: string;
    estaFirmado?: boolean;
    nomPublico?: string;
    nomPrivado?: string;
    estado?: string;
    documentoId?: number;
}
