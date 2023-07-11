import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { BuzonUsuarioCreacionDto, BuzonUsuarioDto, BuzonUsuarioModificacionDto } from '../../../transferencia';
import { BuzonUsuarioFiltroDto } from '../../../transferencia/filtros';
export declare const BUZON_USUARIO_SERVICIO = "BUZON_USUARIO_SERVICIO";
export interface IBuzonUsuarioServicio {
    buscar(filtroDto: BuzonUsuarioFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<BuzonUsuarioDto>>;
    obtenerPorId(id: number): Promise<BuzonUsuarioDto>;
    guardar(objetoDto: BuzonUsuarioCreacionDto): Promise<RespuestaObjetoDto<BuzonUsuarioDto>>;
    modificar(id: number, objetoDto: BuzonUsuarioModificacionDto): Promise<RespuestaObjetoDto<BuzonUsuarioDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
