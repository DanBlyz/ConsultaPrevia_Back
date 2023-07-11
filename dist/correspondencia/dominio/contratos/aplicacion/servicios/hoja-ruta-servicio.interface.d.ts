import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { HojaRutaCreacionDto, HojaRutaDto, HojaRutaModificacionDto } from '../../../transferencia';
import { HojaRutaFiltroDto } from '../../../transferencia/filtros';
export declare const HOJA_RUTA_SERVICIO = "HOJA_RUTA_SERVICIO";
export interface IHojaRutaServicio {
    buscar(filtroDto: HojaRutaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<HojaRutaDto>>;
    obtenerPorId(id: number): Promise<HojaRutaDto>;
    guardar(objetoDto: HojaRutaCreacionDto): Promise<RespuestaObjetoDto<HojaRutaDto>>;
    modificar(id: number, objetoDto: HojaRutaModificacionDto): Promise<RespuestaObjetoDto<HojaRutaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
