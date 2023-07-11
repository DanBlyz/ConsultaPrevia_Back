import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { SeguimientoCreacionDto, SeguimientoDto, SeguimientoModificacionDto } from '../../../../dominio/transferencia';
import { SeguimientoFiltroDto } from '../../../transferencia/filtros';
export declare const SEGUIMIENTO_SERVICIO = "SEGUIMIENTO_SERVICIO";
export interface ISeguimientoServicio {
    buscar(filtroDto: SeguimientoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<SeguimientoDto>>;
    obtenerPorId(id: number): Promise<SeguimientoDto>;
    guardar(objetoDto: SeguimientoCreacionDto): Promise<RespuestaObjetoDto<SeguimientoDto>>;
    modificar(id: number, objetoDto: SeguimientoModificacionDto): Promise<RespuestaObjetoDto<SeguimientoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
