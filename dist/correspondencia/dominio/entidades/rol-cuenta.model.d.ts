import { Cuenta, Rol } from '.';
export declare class RolCuenta {
    id: number;
    instRegistro: Date;
    fecInicio: Date;
    fecConclusion: Date;
    rolId: number;
    cuentaId: number;
    rol: Rol;
    cuenta: Cuenta;
    rolNombre?: string;
    rolGrupoCodigo?: string;
    rolGrupoNombre?: string;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
