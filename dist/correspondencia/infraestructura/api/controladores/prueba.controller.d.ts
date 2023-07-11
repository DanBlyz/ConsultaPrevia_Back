import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { PruebaFiltroDto } from '../../../dominio/transferencia/filtros';
import { PruebaCreacionDto, PruebaDto, PruebaModificacionDto } from '../../../dominio/transferencia';
export declare class PruebaController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: PruebaFiltroDto): Promise<RespuestaListaDto<PruebaDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<PruebaDto>>;
    guardar(objetoDto: PruebaCreacionDto): Promise<RespuestaObjetoDto<PruebaDto>>;
    modificar(id: number, objetoDto: PruebaModificacionDto): Promise<RespuestaObjetoDto<PruebaDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
