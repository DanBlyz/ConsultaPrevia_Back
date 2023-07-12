import { AuditoriaEntity } from './base/auditoria.entity';
import { ContenidoEntity, TipoDocumentoEntity } from '.';
export declare class PlantillaEntity extends AuditoriaEntity {
    id: number;
    fecha: Date;
    version: number;
    estructura: string;
    tipoDocumentoId: number;
    listaContenido: ContenidoEntity[];
    tipoDocumento: TipoDocumentoEntity;
}
