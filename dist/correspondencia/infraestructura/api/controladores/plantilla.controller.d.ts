import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { PlantillaFiltroDto } from '../../../dominio/transferencia/filtros';
import { PlantillaCreacionDto, PlantillaDto, PlantillaModificacionDto } from '../../../dominio/transferencia';
export declare class PlantillaController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: PlantillaFiltroDto): Promise<RespuestaListaDto<PlantillaDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<PlantillaDto>>;
    guardar(objetoDto: PlantillaCreacionDto): Promise<RespuestaObjetoDto<PlantillaDto>>;
    modificar(id: number, objetoDto: PlantillaModificacionDto): Promise<RespuestaObjetoDto<PlantillaDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}
