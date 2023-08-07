import { CodificadorDto, RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { RolCreacionDto, RolDto, RolModificacionDto } from '../../../dominio/transferencia';
export declare class RolController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    obtenerCodificador(): Promise<RespuestaListaDto<CodificadorDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<RolDto>>;
    guardar(objetoDto: RolCreacionDto): Promise<RespuestaObjetoDto<RolDto>>;
    modificar(id: number, objetoDto: RolModificacionDto): Promise<RespuestaObjetoDto<RolDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
