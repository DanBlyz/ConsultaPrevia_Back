import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class PuestoPersonaFiltroDto extends FiltroBaseDto {
    tipoMovilidad?: string;
    tipoLaboral?: string;
    esInterinato?: boolean;
    estado?: string;
    puestoId?: number;
    personaId?: number;
    uniOrganizacionalId?: number;
}
