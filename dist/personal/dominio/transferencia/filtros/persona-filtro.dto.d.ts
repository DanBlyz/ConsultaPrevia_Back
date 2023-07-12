import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class PersonaFiltroDto extends FiltroBaseDto {
    codigo?: string;
    primApellido?: string;
    segApellido?: string;
    nombre?: string;
    numDocumento?: string;
    expedicion?: string;
    estadoLaboral?: string;
    uniOrganizacionalId?: number;
}
