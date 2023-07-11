import { AuditoriaEntity } from './base/auditoria.entity';
import { InformeEntity } from './informe.entity';
export declare class SujetoIdentificadoEntity extends AuditoriaEntity {
    id: number;
    fk_idinforme: number;
    comunidad: string;
    representante: string;
    informe: InformeEntity;
}
