import { AuditoriaEntity } from './base/auditoria.entity';
import { DocumentoEntity } from '.';
export declare class AdjuntoEntity extends AuditoriaEntity {
    id: number;
    tipo: string;
    codigo: string;
    tipoMime: string;
    tamanio: number;
    extension: string;
    estaFirmado: boolean;
    nomPublico: string;
    nomPrivado: string;
    estado: string;
    documentoId: number;
    documento: DocumentoEntity;
}
