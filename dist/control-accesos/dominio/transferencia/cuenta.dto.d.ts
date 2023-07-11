import { RolCuentaDto } from '.';
export declare class CuentaDto {
    id: number;
    codigo: string;
    modoAutenticacion: string;
    nombre: string;
    clave: string;
    estaAutorizada: boolean;
    instUltSesion?: Date;
    numIntFallidos: number;
    estaBloqueada: boolean;
    instUltBloqueo?: Date;
    listaRolCuenta?: RolCuentaDto[];
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class CuentaCreacionDto {
    codigo: string;
    modoAutenticacion: string;
    nombre: string;
    clave: string;
    contrasenia: string;
}
export declare class CuentaModificacionDto {
    modoAutenticacion?: string;
    nombre?: string;
    estaAutorizada?: boolean;
    estaBloqueada?: boolean;
}
