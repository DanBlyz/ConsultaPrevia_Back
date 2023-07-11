import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class SujetoIdentificadoFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idinforme?: number;
    comunidad?: string;
    representante?: string;
}
