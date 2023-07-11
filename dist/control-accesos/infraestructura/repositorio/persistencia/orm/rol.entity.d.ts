import { GrupoEntity, RolCuentaEntity } from '.';
export declare class RolEntity {
    id: number;
    codigo: string;
    nombre: string;
    grupoId: number;
    grupo: GrupoEntity;
    listaRolCuenta?: RolCuentaEntity[];
}
