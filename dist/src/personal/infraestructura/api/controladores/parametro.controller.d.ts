import { CodificadorDto, RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { ParametroFiltroDto } from '../../../dominio/transferencia/filtros';
import { ParametroCreacionDto, ParametroDto, ParametroModificacionDto } from '../../../dominio/transferencia';
export declare class ParametroController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    obtenerCodificador(tipo: string): Promise<RespuestaListaDto<CodificadorDto>>;
    buscar(filtroDto: ParametroFiltroDto): Promise<RespuestaListaDto<ParametroDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<ParametroDto>>;
    guardar(objetoDto: ParametroCreacionDto): Promise<RespuestaObjetoDto<ParametroDto>>;
    modificar(id: number, objetoDto: ParametroModificacionDto): Promise<RespuestaObjetoDto<ParametroDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
