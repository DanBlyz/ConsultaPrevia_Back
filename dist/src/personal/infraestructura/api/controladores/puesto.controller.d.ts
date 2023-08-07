import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { PuestoFiltroDto } from '../../../dominio/transferencia/filtros';
import { PuestoCreacionDto, PuestoDto, PuestoModificacionDto } from '../../../dominio/transferencia';
export declare class PuestoController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: PuestoFiltroDto): Promise<RespuestaListaDto<PuestoDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<PuestoDto>>;
    guardar(objetoDto: PuestoCreacionDto): Promise<RespuestaObjetoDto<PuestoDto>>;
    modificar(id: number, objetoDto: PuestoModificacionDto): Promise<RespuestaObjetoDto<PuestoDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
