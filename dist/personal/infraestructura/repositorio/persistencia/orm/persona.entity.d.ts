import { AuditoriaEntity } from './base/auditoria.entity';
import { FotografiaEntity, InfoLaboralEntity, PuestoPersonaEntity } from '../orm';
export declare class PersonaEntity extends AuditoriaEntity {
    id: number;
    codigo: string;
    primApellido: string;
    segApellido: string;
    nombre: string;
    numDocumento: string;
    expedicion: string;
    fecNacimiento: Date;
    correoPersonal: string;
    celularPersonal: string;
    fotografia: FotografiaEntity;
    infoLaboral: InfoLaboralEntity;
    listaPuestoPersona: PuestoPersonaEntity[];
}
