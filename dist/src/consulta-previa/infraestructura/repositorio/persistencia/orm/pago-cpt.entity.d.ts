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
    estado: string;
    transaccion: number;
    fechaActual: Date;
    canal: string;
    cpt: number;
    fechaVigencia: Date;
    fechaValidez: Date;
    inicioVigencia: Date;
    tipoServicio: string;
    cptPdf: string;
    actoAdministrativo: ActoAdministrativoEntity;
}
