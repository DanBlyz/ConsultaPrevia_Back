import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { PlantillaCreacionDto, PlantillaDto, PlantillaModificacionDto } from '../../../transferencia';
import { PlantillaFiltroDto } from '../../../transferencia/filtros';
export declare const PLANTILLA_SERVICIO = "PLANTILLA_SERVICIO";
export interface IPlantillaServicio {
    buscar(filtroDto: PlantillaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<PlantillaDto>>;
    obtenerPorId(id: number): Promise<PlantillaDto>;
    guardar(objetoDto: PlantillaCreacionDto): Promise<RespuestaObjetoDto<PlantillaDto>>;
    modificar(id: number, objetoDto: PlantillaModificacionDto): Promise<RespuestaObjetoDto<PlantillaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
