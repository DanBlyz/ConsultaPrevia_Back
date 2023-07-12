import { AuditoriaEntity } from './base/auditoria.entity';
import { ContenidoDetalleEntity, DocumentoEntity, PlantillaEntity } from '.';
export declare class ContenidoEntity extends AuditoriaEntity {
    id: number;
    version: number;
    planillaId: number;
    documento: DocumentoEntity;
    plantilla: PlantillaEntity;
    listaContenidoDetalle: ContenidoDetalleEntity[];
}
