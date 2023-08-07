export declare class ParametroDto {
    id: number;
    tipo: string;
    orden: number;
    valor: string;
    texto: string;
    estaActivo: boolean;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class ParametroCreacionDto {
    tipo: string;
    orden: number;
    valor: string;
    texto: string;
    estaActivo?: boolean;
}
export declare class ParametroModificacionDto {
    tipo?: string;
    orden?: number;
    valor?: string;
    texto?: string;
    estaActivo?: boolean;
}
