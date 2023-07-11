import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { BuzonCreacionDto, BuzonDto, BuzonModificacionDto } from '../../../transferencia';
import { BuzonFiltroDto } from '../../../transferencia/filtros';
export declare const BUZON_SERVICIO = "BUZON_SERVICIO";
export interface IBuzonServicio {
    buscar(filtroDto: BuzonFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<BuzonDto>>;
    obtenerPorId(id: number): Promise<BuzonDto>;
    guardar(objetoDto: BuzonCreacionDto): Promise<RespuestaObjetoDto<BuzonDto>>;
    modificar(id: number, objetoDto: BuzonModificacionDto): Promise<RespuestaObjetoDto<BuzonDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
