import { Rol } from '.';
export declare class Grupo {
    id: number;
    codigo: string;
    nombre: string;
    descripcion: string;
    listaRol?: Rol[];
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
