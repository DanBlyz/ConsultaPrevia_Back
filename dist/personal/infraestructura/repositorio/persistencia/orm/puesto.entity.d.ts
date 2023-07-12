import { AuditoriaEntity } from './base/auditoria.entity';
import { InfoLaboralEntity, PuestoPersonaEntity, UniOrganizacionalEntity } from '.';
export declare class PuestoEntity extends AuditoriaEntity {
    id: number;
    nombre: string;
    descripcion: string;
    nivelJerarquico: number;
    estaActivo: boolean;
    uniOrganizacionalId: number;
    uniOrganizacional: UniOrganizacionalEntity;
    listaInfoLaboral: InfoLaboralEntity[];
    listaPuestoPersona: PuestoPersonaEntity[];
}
