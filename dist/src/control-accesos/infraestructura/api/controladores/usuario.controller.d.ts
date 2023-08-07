import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { UsuarioFiltroDto } from '../../../dominio/transferencia/filtros';
import { CuentaCreacionDto, CuentaDto, CuentaModificacionDto, UsuarioCreacionDto, UsuarioDto, UsuarioModificacionDto } from '../../../dominio/transferencia';
export declare class UsuarioController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: UsuarioFiltroDto): Promise<RespuestaListaDto<UsuarioDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<UsuarioDto>>;
    guardar(objetoDto: UsuarioCreacionDto): Promise<RespuestaObjetoDto<UsuarioDto>>;
    modificar(id: number, objetoDto: UsuarioModificacionDto): Promise<RespuestaObjetoDto<UsuarioDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
    obtenerCuentaPorId(usuarioId: number, id: number): Promise<RespuestaObjetoDto<CuentaDto>>;
    guardarCuenta(usuarioId: number, objetoDto: CuentaCreacionDto): Promise<RespuestaObjetoDto<CuentaDto>>;
    modificarCuenta(usuarioId: number, id: number, objetoDto: CuentaModificacionDto): Promise<RespuestaObjetoDto<CuentaDto>>;
    eliminarCuenta(usuarioId: number, id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
