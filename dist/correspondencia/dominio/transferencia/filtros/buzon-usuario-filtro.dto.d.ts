import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class BuzonUsuarioFiltroDto extends FiltroBaseDto {
    tipo?: string;
    usuario?: string;
    nombre?: string;
    fecInicio?: Date;
    fecConclusion?: Date;
    estado?: string;
    buzonId?: number;
}
