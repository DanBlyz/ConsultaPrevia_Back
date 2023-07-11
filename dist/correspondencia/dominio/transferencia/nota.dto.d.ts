export declare class NotaDto {
    id: number;
    instante: Date;
    titulo: string;
    contenido: string;
    usuario: string;
    esPublica: boolean;
    documentoId: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class NotaCreacionDto {
    titulo: string;
    contenido: string;
    usuario: string;
    esPublica: boolean;
    documentoId: number;
}
export declare class NotaModificacionDto {
    titulo?: string;
    contenido?: string;
    usuario?: string;
    esPublica?: boolean;
}
