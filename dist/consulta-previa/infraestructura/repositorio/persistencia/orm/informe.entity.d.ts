import { AuditoriaEntity } from './base/auditoria.entity';
import { TramiteEntity } from './tramite.entity';
import { SujetoIdentificadoEntity } from './sujeto-identificado.entity';
export declare class InformeEntity extends AuditoriaEntity {
    id: number;
    fk_idTramite: number;
    correlativo: string;
    referencia: string;
    informePdf: string;
    asunto: string;
    flujo: string;
    tramite: TramiteEntity;
    listaSujetoIdentificado: SujetoIdentificadoEntity[];
}
