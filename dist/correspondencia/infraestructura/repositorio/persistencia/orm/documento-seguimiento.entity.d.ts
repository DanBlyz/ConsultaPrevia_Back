import { AuditoriaEntity } from './base/auditoria.entity';
import { DocumentoEntity } from '.';
export declare class DocumentoSeguimientoEntity extends AuditoriaEntity {
    id: number;
    accion: string;
    instante: Date;
    usuario: string;
    documentoId: number;
    documento: DocumentoEntity;
}
