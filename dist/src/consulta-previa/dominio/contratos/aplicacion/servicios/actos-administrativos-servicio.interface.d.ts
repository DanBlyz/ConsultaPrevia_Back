import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { ActoAdministrativoCreacionDto, ActoAdministrativoDto, ActoAdministrativoModificacionDto } from '../../../../dominio/transferencia';
import { ActoAdministrativoFiltroDto } from '../../../transferencia/filtros';
export declare const ACTOS_ADMINISTRATIVOS_SERVICIO = "ACTOS_ADMINISTRATIVOS_SERVICIO";
export interface IActoAdministrativoServicio {
    buscar(filtroDto: ActoAdministrativoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ActoAdministrativoDto>>;
    obtenerPorId(id: number): Promise<ActoAdministrativoDto>;
    guardar(objetoDto: ActoAdministrativoCreacionDto): Promise<RespuestaObjetoDto<ActoAdministrativoDto>>;
    modificar(id: number, objetoDto: ActoAdministrativoModificacionDto): Promise<RespuestaObjetoDto<ActoAdministrativoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
