import { AuditoriaEntity } from './base/auditoria.entity';
import { BuzonUsuarioEntity, ClasificacionBuzonEntity, SeguimientoEntity } from '.';
export declare class BuzonEntity extends AuditoriaEntity {
    id: number;
    uniOrganizacional: string;
    puesto: string;
    estado: string;
    refUniOrganizacionalId: number;
    refPuestoId: number;
    listaBuzonUsuario: BuzonUsuarioEntity[];
    listaSeguimientoOrigen: SeguimientoEntity[];
    listaSeguimientoDestino: SeguimientoEntity[];
    listaSeguimientoActual: SeguimientoEntity[];
    listaClasificacionBuzon: ClasificacionBuzonEntity[];
}
