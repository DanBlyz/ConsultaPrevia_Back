import { AuditoriaEntity } from './base/auditoria.entity';
import { BuzonEntity, ClasificacionEntity } from '.';
export declare class ClasificacionBuzonEntity extends AuditoriaEntity {
    id: number;
    clasificacionId: number;
    buzonId: number;
    clasificacion: ClasificacionEntity;
    buzon: BuzonEntity;
}
