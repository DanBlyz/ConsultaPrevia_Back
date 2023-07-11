export declare class UsuarioDto {
    id: number;
    nombre: string;
    apellido: string;
    nomPublico: string;
    correoElectronico: string;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class UsuarioCreacionDto {
    id: number;
    nombre: string;
    apellido: string;
    nomPublico: string;
    correoElectronico: string;
}
export declare class UsuarioModificacionDto {
    id?: number;
    nombre?: string;
    apellido?: string;
    nomPublico?: string;
    correoElectronico?: string;
}
