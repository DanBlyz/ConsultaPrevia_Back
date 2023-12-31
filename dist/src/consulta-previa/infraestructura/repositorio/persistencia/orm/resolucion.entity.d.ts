import { AuditoriaEntity } from './base/auditoria.entity';
import { TramiteEntity } from './tramite.entity';
import { ActoAdministrativoEntity } from './actos-administrativos.entity';
export declare class ResolucionEntity extends AuditoriaEntity {
    id: number;
    fk_idTramite: number;
    informe: string;
    correlativo: string;
    informeAprobado: boolean;
    actoAdministrativo: boolean;
    resolucionPdf: string;
    flujo: string;
    referencia: string;
    tramite: TramiteEntity;
    listaActoAdministrativo: ActoAdministrativoEntity[];
}
