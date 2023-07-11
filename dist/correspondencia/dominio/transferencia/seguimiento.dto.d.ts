export declare class SeguimientoDto {
    id: number;
    accion: string;
    instante: Date;
    proveidoAccion: string;
    proveido: string;
    fecRecepcion: Date;
    observacion: string;
    esBorrador: boolean;
    estado: string;
    documentoId: number;
    buzonIdOrigen: number;
    buzonIdDestino: number;
    buzonIdActual: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class SeguimientoCreacionDto {
    accion: string;
    proveidoAccion: string;
    proveido: string;
    observacion: string;
    esBorrador: boolean;
    estado: string;
    documentoId: number;
    buzonIdOrigen: number;
    buzonIdDestino: number;
    buzonIdActual: number;
}
export declare class SeguimientoModificacionDto {
    accion?: string;
    proveidoAccion?: string;
    proveido?: string;
    observacion?: string;
    esBorrador?: boolean;
    estado?: string;
    documentoId?: number;
    buzonIdOrigen?: number;
    buzonIdDestino?: number;
    buzonIdActual?: number;
}
