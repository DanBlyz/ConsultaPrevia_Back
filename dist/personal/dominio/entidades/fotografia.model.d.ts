import { Persona } from '.';
export declare class Fotografia {
    id: number;
    archivo: string;
    tipoMime: string;
    extension: string;
    tamanio: number;
    persona?: Persona;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
