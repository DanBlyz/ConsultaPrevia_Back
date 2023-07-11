import { AuditoriaEntity } from './base/auditoria.entity';
export declare class DocumentoSeguimientoEntity extends AuditoriaEntity {
    id: number;
    accion: string;
    instante: Date;
    usuario: string;
    documentoId: number;
}
