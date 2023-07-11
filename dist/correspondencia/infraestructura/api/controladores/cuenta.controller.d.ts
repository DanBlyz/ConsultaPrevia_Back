import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { CuentaFiltroDto } from '../../../dominio/transferencia/filtros';
import { CuentaDto, CuentaCreacionDto, RolCuentaCreacionDto, RolCuentaDto, RolCuentaModificacionDto } from '../../../dominio/transferencia';
export declare class CuentaController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: CuentaFiltroDto): Promise<RespuestaListaDto<CuentaDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<CuentaDto>>;
    guardar(objetoDto: CuentaCreacionDto): Promise<RespuestaObjetoDto<CuentaDto>>;
    modificar(id: number, objetoDto: any): Promise<RespuestaObjetoDto<CuentaDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
    desbloquear(id: number): Promise<RespuestaObjetoDto<CuentaDto>>;
    autorizar(id: number): Promise<RespuestaObjetoDto<CuentaDto>>;
    desautorizar(id: number): Promise<RespuestaObjetoDto<CuentaDto>>;
    restablcerContrasenia(id: number, objetoDto: any): Promise<RespuestaObjetoDto<CuentaDto>>;
    obtenerRoles(cuentaId: number): Promise<RespuestaListaDto<RolCuentaDto>>;
    obtenerRolPorId(cuentaId: number, id: number): Promise<RespuestaObjetoDto<RolCuentaDto>>;
    guardarRol(cuentaId: number, objetoDto: RolCuentaCreacionDto): Promise<RespuestaObjetoDto<RolCuentaDto>>;
    modificarRol(cuentaId: number, id: number, objetoDto: RolCuentaModificacionDto): Promise<RespuestaObjetoDto<RolCuentaDto>>;
    eliminarRol(cuentaId: number, id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
