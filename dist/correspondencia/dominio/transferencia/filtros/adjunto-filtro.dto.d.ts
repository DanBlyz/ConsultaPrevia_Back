import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class AdjuntoFiltroDto extends FiltroBaseDto {
    tipo?: string;
    codigo?: string;
    tipoMime?: string;
    tamanio?: number;
    extension?: string;
    estaFirmado?: boolean;
    nomPublico?: string;
    nomPrivado?: string;
    estado?: string;
}
