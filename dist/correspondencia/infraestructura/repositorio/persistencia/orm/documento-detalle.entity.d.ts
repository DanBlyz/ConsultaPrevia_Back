import { AuditoriaEntity } from './base/auditoria.entity';
import { DocumentoEntity } from '.';
export declare class DocumentoDetalleEntity extends AuditoriaEntity {
    id: number;
    tipo: string;
    valor: string;
    documentoId: number;
    documento: DocumentoEntity;
}
