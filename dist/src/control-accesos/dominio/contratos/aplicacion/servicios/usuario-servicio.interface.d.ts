import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { UsuarioCreacionDto, UsuarioDto, UsuarioModificacionDto } from '../../../transferencia';
import { UsuarioFiltroDto } from '../../../transferencia/filtros';
export declare const USUARIO_SERVICIO = "USUARIO_SERVICIO";
export interface IUsuarioServicio {
    buscar(filtroDto: UsuarioFiltroDto, pagina: number, cantidad: number): Promise<ListaPaginadaDto<UsuarioDto>>;
    obtenerPorId(id: number): Promise<UsuarioDto>;
    guardar(objetoDto: UsuarioCreacionDto): Promise<RespuestaObjetoDto<UsuarioDto>>;
    modificar(id: number, objetoDto: UsuarioModificacionDto): Promise<RespuestaObjetoDto<UsuarioDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
    obtenerPorCodCuenta(codCuenta: string): Promise<UsuarioDto>;
    modificarPorCodCuenta(codCuenta: string, objetoDto: UsuarioModificacionDto): any;
}
