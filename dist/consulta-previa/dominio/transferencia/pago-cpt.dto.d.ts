export declare class PagoCptDto {
    id: number;
    fk_idActos: number;
    pagoRealizado: boolean;
    flujo: string;
    diasViaje: number;
    tipoViaje: string;
    montoTotal: number;
    apm: string;
    descripcion: string;
}
export declare class PagoCptCreacionDto {
    fk_idActos: number;
    pagoRealizado: boolean;
    flujo: string;
    diasViaje: number;
    tipoViaje: string;
    montoTotal: number;
    apm: string;
    descripcion: string;
}
export declare class PagoCptModificacionDto {
    pagoRealizado?: boolean;
    flujo?: string;
    diasViaje?: number;
    tipoViaje?: string;
    montoTotal?: number;
    apm?: string;
    descripcion?: string;
}
