import { AuditoriaEntity } from './base/auditoria.entity';
import { ActoAdministrativoEntity } from './actos-administrativos.entity';
export declare class PagoCptEntity extends AuditoriaEntity {
    id: number;
    fk_idActos: number;
    pagoRealizado: boolean;
    flujo: string;
    diasViaje: number;
    tipoViaje: string;
    montoTotal: number;
    apm: string;
    descripcion: string;
    actoAdministrativo: ActoAdministrativoEntity;
}
