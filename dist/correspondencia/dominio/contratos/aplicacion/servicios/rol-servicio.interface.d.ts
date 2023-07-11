import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { RolCreacionDto, RolDto, RolModificacionDto } from '../../../transferencia';
import { RolFiltroDto } from '../../../transferencia/filtros';
export declare const ROL_SERVICIO = "ROL_SERVICIO";
export interface IRolServicio {
    buscar(filtroDto: RolFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<RolDto>>;
    obtenerPorId(id: number): Promise<RolDto>;
    guardar(objetoDto: RolCreacionDto): Promise<RespuestaObjetoDto<RolDto>>;
    modificar(id: number, objetoDto: RolModificacionDto): Promise<RespuestaObjetoDto<RolDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
