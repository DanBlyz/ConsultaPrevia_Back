import { CodificadorDto, RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { UniOrganizacionalFiltroDto } from '../../../dominio/transferencia/filtros';
import { UniOrganizacionalCreacionDto, UniOrganizacionalDto, UniOrganizacionalModificacionDto } from '../../../dominio/transferencia';
export declare class UniOrganizacionalController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    obtenerCodificador(): Promise<RespuestaListaDto<CodificadorDto>>;
    buscar(filtroDto: UniOrganizacionalFiltroDto): Promise<RespuestaListaDto<UniOrganizacionalDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<UniOrganizacionalDto>>;
    guardar(objetoDto: UniOrganizacionalCreacionDto): Promise<RespuestaObjetoDto<UniOrganizacionalDto>>;
    modificar(id: number, objetoDto: UniOrganizacionalModificacionDto): Promise<RespuestaObjetoDto<UniOrganizacionalDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
    obtenerPuestosCodificador(id: number): Promise<RespuestaListaDto<CodificadorDto>>;
}
