import { AuditoriaEntity } from './base/auditoria.entity';
import { DocumentoEntity } from '.';
export declare class NotaEntity extends AuditoriaEntity {
    id: number;
    instante: Date;
    titulo: string;
    contenido: string;
    usuario: string;
    esPublica: boolean;
    documentoId: number;
    documento: DocumentoEntity;
}
