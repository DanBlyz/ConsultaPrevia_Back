import { RolDto } from '.';
export declare class GrupoDto {
    id: number;
    codigo: string;
    nombre: string;
    descripcion: string;
    listaRol?: RolDto[];
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class GrupoCreacionDto {
    codigo?: string;
    nombre: string;
    descripcion: string;
}
export declare class GrupoModificacionDto {
    codigo?: string;
    nombre?: string;
    descripcion?: string;
}
