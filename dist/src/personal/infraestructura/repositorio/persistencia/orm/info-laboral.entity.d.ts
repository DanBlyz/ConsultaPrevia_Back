import { AuditoriaEntity } from './base/auditoria.entity';
import { PersonaEntity, PuestoEntity, UniOrganizacionalEntity } from '.';
export declare class InfoLaboralEntity extends AuditoriaEntity {
    id: number;
    tipoLaboral: string;
    correoInstitucional?: string;
    numInterno?: string;
    estado: string;
    cuenta?: string;
    uniOrganizacionalId: number;
    puestoId: number;
    persona: PersonaEntity;
    uniOrganizacional: UniOrganizacionalEntity;
    puesto: PuestoEntity;
}
