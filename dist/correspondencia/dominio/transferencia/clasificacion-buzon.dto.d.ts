export declare class ClasificacionBuzonDto {
    id: number;
    clasificacionId: number;
    buzonId: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class ClasificacionBuzonCreacionDto {
    clasificacionId: number;
    buzonId: number;
}
export declare class ClasificacionBuzonModificacionDto {
    clasificacionId?: number;
    buzonId?: number;
}
