import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { TramiteFiltroDto } from '../../../dominio/transferencia/filtros';
import { TramiteCreacionDto, TramiteDto, TramiteModificacionDto } from '../../../dominio/transferencia';
export declare class TramiteController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: TramiteFiltroDto): Promise<RespuestaListaDto<TramiteDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<TramiteDto>>;
    guardar(objetoDto: TramiteCreacionDto): Promise<RespuestaObjetoDto<TramiteDto>>;
    modificar(id: number, objetoDto: TramiteModificacionDto): Promise<RespuestaObjetoDto<TramiteDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
