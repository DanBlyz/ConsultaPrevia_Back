import { RolCuenta } from '.';
export declare class Cuenta {
    id: number;
    codigo: string;
    modoAutenticacion: string;
    nombre: string;
    contrasenia: string;
    estaAutorizada: boolean;
    instUltSesion?: Date;
    numIntFallidos: number;
    estaBloqueada: boolean;
    instUltBloqueo?: Date;
    listaRolCuenta?: RolCuenta[];
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
