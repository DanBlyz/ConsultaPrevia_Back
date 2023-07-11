import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { ContenidoCreacionDto, ContenidoDto, ContenidoModificacionDto } from '../../../../dominio/transferencia';
import { ContenidoFiltroDto } from '../../../transferencia/filtros';
export declare const CONTENIDO_SERVICIO = "CONTENIDO_SERVICIO";
export interface IContenidoServicio {
    buscar(filtroDto: ContenidoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ContenidoDto>>;
    obtenerPorId(id: number): Promise<ContenidoDto>;
    guardar(objetoDto: ContenidoCreacionDto): Promise<RespuestaObjetoDto<ContenidoDto>>;
    modificar(id: number, objetoDto: ContenidoModificacionDto): Promise<RespuestaObjetoDto<ContenidoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
