import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { PagoCptCreacionDto, PagoCptDto, PagoCptModificacionDto } from '../../../../dominio/transferencia';
import { PagoCptFiltroDto } from '../../../transferencia/filtros';
export declare const PAGO_CPT_SERVICIO = "PAGO_CPT_SERVICIO";
export interface IPagoCptServicio {
    buscar(filtroDto: PagoCptFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<PagoCptDto>>;
    obtenerPorId(id: number): Promise<PagoCptDto>;
    guardar(objetoDto: PagoCptCreacionDto): Promise<RespuestaObjetoDto<PagoCptDto>>;
    modificar(id: number, objetoDto: PagoCptModificacionDto): Promise<RespuestaObjetoDto<PagoCptDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
