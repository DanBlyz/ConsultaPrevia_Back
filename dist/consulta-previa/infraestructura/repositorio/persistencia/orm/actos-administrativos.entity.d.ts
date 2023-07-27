import { AuditoriaEntity } from './base/auditoria.entity';
import { TramiteEntity } from './tramite.entity';
import { PagoCptEntity } from './pago-cpt.entity';
import { ViajeEntity } from './viaje.entity';
import { ResolucionEntity } from './resolucion.entity';
export declare class ActoAdministrativoEntity extends AuditoriaEntity {
    id: number;
    fk_idTramite: number;
    fk_idResolucion: number;
    viajeRealizado: boolean;
    flujo: string;
    estado: string;
    tramite: TramiteEntity;
    resolucion: ResolucionEntity;
    pagoCpt: PagoCptEntity;
    viaje: ViajeEntity;
}
