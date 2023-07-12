import { AuditoriaEntity } from './base/auditoria.entity';
import { DocumentoEntity } from '.';
export declare class EtiquetaEntity extends AuditoriaEntity {
    id: number;
    nombre: string;
    descripcion: string;
    usuario: string;
    esPublica: boolean;
    documentoId: number;
    documento: DocumentoEntity;
}
