import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class SujetoIdentificadoFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idInforme?: number;
    comunidad?: string;
    representante?: string;
}
