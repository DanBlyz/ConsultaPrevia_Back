import { AuditoriaEntity } from './base/auditoria.entity';
import { ClasificacionBuzonEntity, DocumentoEntity } from '.';
export declare class ClasificacionEntity extends AuditoriaEntity {
    id: number;
    nombre: string;
    descripcion: string;
    listaClasificacionBuzon: ClasificacionBuzonEntity[];
    listaDocumento: DocumentoEntity[];
}
