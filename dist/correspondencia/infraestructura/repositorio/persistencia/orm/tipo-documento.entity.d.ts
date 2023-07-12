import { AuditoriaEntity } from './base/auditoria.entity';
import { DocumentoEntity, PlantillaEntity } from '.';
export declare class TipoDocumentoEntity extends AuditoriaEntity {
    id: number;
    sigla: string;
    nombre: string;
    descripcion: string;
    estaActivo: boolean;
    listaDocumento: DocumentoEntity[];
    listaPlantilla: PlantillaEntity[];
}
