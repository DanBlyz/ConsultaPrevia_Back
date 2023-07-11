import { Grupo, RolCuenta } from '.';
export declare class Rol {
    id: number;
    codigo: string;
    nombre: string;
    grupoId: number;
    grupo: Grupo;
    grupoCodigo?: string;
    grupoNombre?: string;
    listaRolCuenta?: RolCuenta[];
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
