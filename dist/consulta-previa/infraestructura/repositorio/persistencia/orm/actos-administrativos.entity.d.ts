import { AuditoriaEntity } from './base/auditoria.entity';
import { TramiteEntity } from './tramite.entity';
import { PagoCptEntity } from './pago-cpt.entity';
import { ViajeEntity } from './viaje.entity';
export declare class ActoAdministrativoEntity extends AuditoriaEntity {
    id: number;
    fk_idTramite: number;
    viajeRealizado: boolean;
    flujo: string;
    encargado: string;
    pagoRealizado: boolean;
    tramite: TramiteEntity;
    pagoCpt: PagoCptEntity;
    viaje: ViajeEntity;
}
