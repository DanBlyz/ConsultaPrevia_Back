import { CuentaDto, RolDto } from '.';
export declare class RolCuentaDto {
    id: number;
    instRegistro: Date;
    fecInicio: Date;
    fecConclusion?: Date;
    rolId: number;
    cuentaId: number;
    rol?: RolDto;
    cuenta?: CuentaDto;
    rolNombre?: string;
    rolGrupoCodigo?: string;
    rolGrupoNombre?: string;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class RolCuentaCreacionDto {
    fecInicio: Date;
    fecConclusion?: Date;
    rolId: number;
    cuentaId: number;
}
export declare class RolCuentaModificacionDto {
    fecInicio?: Date;
    fecConclusion?: Date;
    rolId?: number;
    cuentaId?: number;
}
