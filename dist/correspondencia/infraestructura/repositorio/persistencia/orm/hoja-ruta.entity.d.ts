import { AuditoriaEntity } from './base/auditoria.entity';
import { DocumentoEntity } from '.';
export declare class HojaRutaEntity extends AuditoriaEntity {
    id: number;
    gestion: number;
    numero: number;
    fecha: Date;
    estado: string;
    listaDocumento: DocumentoEntity[];
}
