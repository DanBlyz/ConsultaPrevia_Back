import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { GrupoFiltroDto } from '../../../dominio/transferencia/filtros';
import { GrupoCreacionDto, GrupoDto, GrupoModificacionDto } from '../../../dominio/transferencia';
export declare class GrupoController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: GrupoFiltroDto): Promise<RespuestaListaDto<GrupoDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<GrupoDto>>;
    guardar(objetoDto: GrupoCreacionDto): Promise<RespuestaObjetoDto<GrupoDto>>;
    modificar(id: number, objetoDto: GrupoModificacionDto): Promise<RespuestaObjetoDto<GrupoDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
