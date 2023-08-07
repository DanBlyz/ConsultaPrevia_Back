import { AuditoriaEntity } from './base/auditoria.entity';
import { ActoAdministrativoEntity } from './actos-administrativos.entity';
export declare class ViajeEntity extends AuditoriaEntity {
    id: number;
    fk_idActos: number;
    fechaInicio: Date;
    fechaFin: Date;
    descripcion: string;
    nroFormulario: string;
    formularioPdf: string;
    actoAdministrativo: ActoAdministrativoEntity;
}
