import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { NotaCreacionDto, NotaDto, NotaModificacionDto } from '../../../../dominio/transferencia';
import { NotaFiltroDto } from '../../../transferencia/filtros';
export declare const NOTA_SERVICIO = "NOTA_SERVICIO";
export interface INotaServicio {
    buscar(filtroDto: NotaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<NotaDto>>;
    obtenerPorId(id: number): Promise<NotaDto>;
    guardar(objetoDto: NotaCreacionDto): Promise<RespuestaObjetoDto<NotaDto>>;
    modificar(id: number, objetoDto: NotaModificacionDto): Promise<RespuestaObjetoDto<NotaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
