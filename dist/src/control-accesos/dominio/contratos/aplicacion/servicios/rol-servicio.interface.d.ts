import { RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { RolCreacionDto, RolDto, RolModificacionDto } from '../../../transferencia';
export declare const ROL_SERVICIO = "ROL_SERVICIO";
export interface IRolServicio {
    obtenerTodo(): Promise<RolDto[]>;
    obtenerPorId(id: number): Promise<RolDto>;
    guardar(objetoDto: RolCreacionDto): Promise<RespuestaObjetoDto<RolDto>>;
    modificar(id: number, objetoDto: RolModificacionDto): Promise<RespuestaObjetoDto<RolDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
