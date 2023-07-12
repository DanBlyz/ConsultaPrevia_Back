import { AuditoriaEntity } from './base/auditoria.entity';
import { DocumentoEntity } from '.';
export declare class ParticipanteEntity extends AuditoriaEntity {
    id: number;
    tipo: string;
    nombre: string;
    puesto: string;
    uniOrganizacional: string;
    entidad: string;
    documentoId: number;
    documento: DocumentoEntity;
}
