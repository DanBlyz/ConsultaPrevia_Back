import { AuditoriaEntity } from './base/auditoria.entity';
import { CuentaEntity, RolEntity } from '.';
export declare class RolCuentaEntity extends AuditoriaEntity {
    id: number;
    instRegistro: Date;
    fecInicio: Date;
    fecConclusion: Date;
    rolId: number;
    cuentaId: number;
    rol: RolEntity;
    cuenta: CuentaEntity;
}
