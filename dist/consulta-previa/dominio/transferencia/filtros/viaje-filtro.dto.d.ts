import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class ViajeFiltroDto extends FiltroBaseDto {
    id?: number;
    fk_idActos?: number;
    fechaIncio?: Date;
    fechaFin?: Date;
    descripcion?: string;
    nroFormulario?: string;
    formularioPdf?: string;
}
