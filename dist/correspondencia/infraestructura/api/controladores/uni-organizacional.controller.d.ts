import { CodificadorDto, RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { UniOrganizacionalFiltroDto } from '../../../dominio/transferencia/filtros';
import { PersonaDto, UniOrganizacionalDto } from '../../../dominio/transferencia';
export declare class UniOrganizacionalController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    obtenerCodificador(): Promise<RespuestaListaDto<CodificadorDto>>;
    buscar(filtroDto: UniOrganizacionalFiltroDto): Promise<RespuestaListaDto<UniOrganizacionalDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<UniOrganizacionalDto>>;
    obtenerPuestosPorUniOrganizacionalId(uniOrganizacionalId: number): Promise<RespuestaListaDto<CodificadorDto>>;
    obtenerPersonasPorUniOrganizacionalId(uniOrganizacionalId: number): Promise<RespuestaListaDto<PersonaDto>>;
}
