import { AuditoriaEntity } from './base/auditoria.entity';
export declare class DocumentoDetalleEntity extends AuditoriaEntity {
    id: number;
    tipo: string;
    valor: string;
    documentoId: number;
}
