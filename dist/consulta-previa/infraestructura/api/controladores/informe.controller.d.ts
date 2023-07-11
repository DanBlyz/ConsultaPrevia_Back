import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { InformeFiltroDto } from '../../../dominio/transferencia/filtros';
import { InformeCreacionDto, InformeDto, InformeModificacionDto } from '../../../dominio/transferencia';
export declare class InformeController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: InformeFiltroDto): Promise<RespuestaListaDto<InformeDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<InformeDto>>;
    guardar(objetoDto: InformeCreacionDto): Promise<RespuestaObjetoDto<InformeDto>>;
    modificar(id: number, objetoDto: InformeModificacionDto): Promise<RespuestaObjetoDto<InformeDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
