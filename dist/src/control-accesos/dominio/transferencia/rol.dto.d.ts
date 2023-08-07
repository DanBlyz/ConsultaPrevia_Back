import { GrupoDto, RolCuentaDto } from '.';
export declare class RolDto {
    id: number;
    codigo: string;
    nombre: string;
    grupoId: number;
    grupo?: GrupoDto;
    grupoCodigo?: string;
    grupoNombre?: string;
    listaRolCuenta?: RolCuentaDto[];
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class RolCreacionDto {
    nombre: string;
    grupoId: number;
}
export declare class RolModificacionDto {
    nombre?: string;
    grupoId?: number;
}
