import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class CuentaFiltroDto extends FiltroBaseDto {
    codigo?: string;
    modoAutenticacion?: string;
    nombre?: string;
    estaAutorizada?: boolean;
    estaBloqueada?: boolean;
}
