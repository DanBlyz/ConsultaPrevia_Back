import { RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { RolCuentaCreacionDto, RolCuentaDto, RolCuentaModificacionDto } from '../../../transferencia';
export declare const ROL_CUENTA_SERVICIO = "ROL_CUENTA_SERVICIO";
export interface IRolCuentaServicio {
    obtenerporCuentaId(cuentaId: number): Promise<RolCuentaDto[]>;
    obtenerPorId(id: number): Promise<RolCuentaDto>;
    guardar(objetoDto: RolCuentaCreacionDto): Promise<RespuestaObjetoDto<RolCuentaDto>>;
    modificar(id: number, objetoDto: RolCuentaModificacionDto): Promise<RespuestaObjetoDto<RolCuentaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
