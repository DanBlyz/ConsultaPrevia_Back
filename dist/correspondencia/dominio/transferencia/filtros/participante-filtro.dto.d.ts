import { FiltroBaseDto } from '../../../../comun/transferencia/filtros';
export declare class ParticipanteFiltroDto extends FiltroBaseDto {
    tipo?: string;
    nombre?: string;
    puesto?: string;
    uniOrganizacional?: string;
    entidad?: string;
    documentoId?: number;
}
