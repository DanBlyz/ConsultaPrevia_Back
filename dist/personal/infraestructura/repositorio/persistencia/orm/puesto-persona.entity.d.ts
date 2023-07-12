import { AuditoriaEntity } from './base/auditoria.entity';
import { PersonaEntity, PuestoEntity, UniOrganizacionalEntity } from '.';
export declare class PuestoPersonaEntity extends AuditoriaEntity {
    id: number;
    tipoMovilidad: string;
    tipoLaboral: string;
    fecInicio: Date;
    fecConclusion?: Date;
    esInterinato: boolean;
    tieneDesvinculacion: boolean;
    estado: string;
    puestoId: number;
    personaId: number;
    uniOrganizacionalId: number;
    puesto: PuestoEntity;
    persona: PersonaEntity;
    uniOrganizacional: UniOrganizacionalEntity;
}
