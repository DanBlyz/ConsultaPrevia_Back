import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class SeguimientoFiltroDto extends FiltroBaseDto {
    accion?: string;
    proveidoAccion?: string;
    proveido?: string;
    viaAprobada?: boolean;
    observacion?: string;
    esBorrador?: boolean;
    estado?: string;
}
