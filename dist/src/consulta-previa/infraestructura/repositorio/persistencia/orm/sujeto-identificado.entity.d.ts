import { AuditoriaEntity } from './base/auditoria.entity';
import { DocumentoEntity } from './documento.entity';
export declare class SujetoIdentificadoEntity extends AuditoriaEntity {
    id: number;
    fk_idDocumento: number;
    comunidad: string;
    autoridad: string;
    telefono: number;
    estado: string;
    documento: DocumentoEntity;
}
