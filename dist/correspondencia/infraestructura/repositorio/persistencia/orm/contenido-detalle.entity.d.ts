import { AuditoriaEntity } from './base/auditoria.entity';
import { ContenidoEntity } from '.';
export declare class ContenidoDetalleEntity extends AuditoriaEntity {
    id: number;
    variable: string;
    valor: string;
    documentoId: number;
    contenido: ContenidoEntity;
}
