import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { SujetoIdentificadoFiltroDto } from '../../../dominio/transferencia/filtros';
import { SujetoIdentificadoCreacionDto, SujetoIdentificadoDto, SujetoIdentificadoModificacionDto } from '../../../dominio/transferencia';
export declare class SujetoIdentificadoController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: SujetoIdentificadoFiltroDto): Promise<RespuestaListaDto<SujetoIdentificadoDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<SujetoIdentificadoDto>>;
    guardar(objetoDto: SujetoIdentificadoCreacionDto): Promise<RespuestaObjetoDto<SujetoIdentificadoDto>>;
    modificar(id: number, objetoDto: SujetoIdentificadoModificacionDto): Promise<RespuestaObjetoDto<SujetoIdentificadoDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
