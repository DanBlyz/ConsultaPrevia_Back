import { AuditoriaEntity } from './base/auditoria.entity';
import { GrupoEntity, RolCuentaEntity } from '.';
export declare class RolEntity extends AuditoriaEntity {
    id: number;
    codigo: string;
    nombre: string;
    grupoId: number;
    grupo: GrupoEntity;
    listaRolCuenta?: RolCuentaEntity[];
}
