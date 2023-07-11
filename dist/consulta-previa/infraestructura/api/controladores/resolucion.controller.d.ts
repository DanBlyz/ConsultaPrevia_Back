import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { ResolucionFiltroDto } from '../../../dominio/transferencia/filtros';
import { ResolucionCreacionDto, ResolucionDto, ResolucionModificacionDto } from '../../../dominio/transferencia';
export declare class ResolucionController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: ResolucionFiltroDto): Promise<RespuestaListaDto<ResolucionDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<ResolucionDto>>;
    guardar(objetoDto: ResolucionCreacionDto): Promise<RespuestaObjetoDto<ResolucionDto>>;
    modificar(id: number, objetoDto: ResolucionModificacionDto): Promise<RespuestaObjetoDto<ResolucionDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
