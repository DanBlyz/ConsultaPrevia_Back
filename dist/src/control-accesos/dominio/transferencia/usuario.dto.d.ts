export declare class UsuarioDto {
    id: number;
    nombre: string;
    apellido: string;
    nomPublico: string;
    correoElectronico: string;
    codCuenta: string;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class UsuarioCreacionDto {
    nombre: string;
    apellido: string;
    nomPublico: string;
    correoElectronico: string;
}
export declare class UsuarioModificacionDto {
    nombre?: string;
    apellido?: string;
    nomPublico?: string;
    correoElectronico?: string;
}
