import { AuditoriaEntity } from './base/auditoria.entity';
import { BuzonEntity } from '.';
export declare class BuzonUsuarioEntity extends AuditoriaEntity {
    id: number;
    tipoAcceso: string;
    usuario: string;
    nombre: string;
    fecInicio: Date;
    fecConclusion: Date;
    estado: string;
    buzonId: number;
    refPersonaId: number;
    buzon: BuzonEntity;
}
