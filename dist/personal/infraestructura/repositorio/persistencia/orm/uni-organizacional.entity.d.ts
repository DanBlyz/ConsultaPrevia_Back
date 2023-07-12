import { AuditoriaEntity } from './base/auditoria.entity';
import { InfoLaboralEntity, PuestoEntity } from '.';
export declare class UniOrganizacionalEntity extends AuditoriaEntity {
    id: number;
    codigo: string;
    sigla: string;
    nombre: string;
    estaActiva: boolean;
    uniOrganizacionalSuperiorId?: number;
    uniOrganizacionalSuperior: UniOrganizacionalEntity;
    listaUniOrganizacional: UniOrganizacionalEntity[];
    listaInfoLaboral: InfoLaboralEntity[];
    listaPuesto: PuestoEntity[];
    listaPuestoPersona: InfoLaboralEntity[];
}
