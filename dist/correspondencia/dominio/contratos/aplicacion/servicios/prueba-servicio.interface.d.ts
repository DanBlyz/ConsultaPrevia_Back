import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { PruebaCreacionDto, PruebaDto, PruebaModificacionDto } from '../../../transferencia';
import { PruebaFiltroDto } from '../../../transferencia/filtros';
export declare const PRUEBA_SERVICIO = "PRUEBA_SERVICIO";
export interface IPruebaServicio {
    buscar(filtroDto: PruebaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<PruebaDto>>;
    obtenerPorId(id: number): Promise<PruebaDto>;
    guardar(objetoDto: PruebaCreacionDto): Promise<RespuestaObjetoDto<PruebaDto>>;
    modificar(id: number, objetoDto: PruebaModificacionDto): Promise<RespuestaObjetoDto<PruebaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
