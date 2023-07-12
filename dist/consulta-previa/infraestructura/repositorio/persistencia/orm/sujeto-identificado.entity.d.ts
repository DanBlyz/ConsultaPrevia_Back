import { AuditoriaEntity } from './base/auditoria.entity';
import { InformeEntity } from './informe.entity';
export declare class SujetoIdentificadoEntity extends AuditoriaEntity {
    id: number;
    fk_idInforme: number;
    comunidad: string;
    representante: string;
    informe: InformeEntity;
}
