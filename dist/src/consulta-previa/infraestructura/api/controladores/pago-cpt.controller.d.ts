import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { PagoCptFiltroDto } from '../../../dominio/transferencia/filtros';
import { PagoCptCreacionDto, PagoCptDto, PagoCptModificacionDto } from '../../../dominio/transferencia';
export declare class PagoCptController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: PagoCptFiltroDto): Promise<RespuestaListaDto<PagoCptDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<PagoCptDto>>;
    guardar(objetoDto: PagoCptCreacionDto): Promise<RespuestaObjetoDto<PagoCptDto>>;
    modificar(id: number, objetoDto: PagoCptModificacionDto): Promise<RespuestaObjetoDto<PagoCptDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
