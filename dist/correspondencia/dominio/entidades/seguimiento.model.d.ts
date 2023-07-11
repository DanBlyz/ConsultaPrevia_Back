export declare class Seguimiento {
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
