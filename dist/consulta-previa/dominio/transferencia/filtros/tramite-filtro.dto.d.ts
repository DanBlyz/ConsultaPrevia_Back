import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class TramiteFiltroDto extends FiltroBaseDto {
    id?: number;
    correlativo?: string;
    codigoUnico?: number;
    areaMinera?: string;
    clasificacion?: string;
    nroCuadricula?: number;
    departamento?: string;
    provincia?: string;
    municipio?: string;
    estado?: string;
}
