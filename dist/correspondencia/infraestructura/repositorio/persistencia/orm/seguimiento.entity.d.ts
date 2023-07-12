import { AuditoriaEntity } from './base/auditoria.entity';
import { BuzonEntity, DocumentoEntity } from '.';
export declare class SeguimientoEntity extends AuditoriaEntity {
    id: number;
    accion: string;
    instante: Date;
    proveidoAccion: string;
    proveido: string;
    fecRecepcion: Date;
    observacion: string;
    esBorrador: boolean;
    estado: string;
    documentoId: number;
    buzonIdOrigen: number;
    buzonIdDestino: number;
    buzonIdActual: number;
    buzonOrigen: BuzonEntity;
    buzonDestino: BuzonEntity;
    buzonActual: BuzonEntity;
    documento: DocumentoEntity;
}
