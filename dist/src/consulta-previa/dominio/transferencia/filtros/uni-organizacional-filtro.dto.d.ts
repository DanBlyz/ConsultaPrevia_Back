import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class UniOrganizacionalFiltroDto extends FiltroBaseDto {
    codigo?: string;
    sigla?: string;
    nombre?: string;
    estaActiva?: boolean;
    uniOrganizacionalSuperiorId?: number;
}
