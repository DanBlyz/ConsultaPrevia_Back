import { CodificadorDto, RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { ClasificacionCreacionDto, ClasificacionDto, ClasificacionModificacionDto } from '../../../dominio/transferencia';
export declare class ClasificacionController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    obtenerCodificador(): Promise<RespuestaListaDto<CodificadorDto>>;
    obtenerTodo(): Promise<RespuestaListaDto<ClasificacionDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<ClasificacionDto>>;
    guardar(objetoDto: ClasificacionCreacionDto): Promise<RespuestaObjetoDto<ClasificacionDto>>;
    modificar(id: number, objetoDto: ClasificacionModificacionDto): Promise<RespuestaObjetoDto<ClasificacionDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
