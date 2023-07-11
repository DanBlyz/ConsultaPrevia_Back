import { AuditoriaEntity } from './base/auditoria.entity';
export declare class DocumentoEntity extends AuditoriaEntity {
    id: number;
    numero: number;
    gestion: number;
    cite: string;
    citeExterno: string;
    instRegistro: Date;
    fecha: Date;
    referencia: string;
    numHojas: number;
    prioridad: string;
    observacion: string;
    esBorrador: boolean;
    estaImpreso: boolean;
    hojaRutaId: number;
    tipoDocumentoId: number;
    clasificacionId: number;
}
