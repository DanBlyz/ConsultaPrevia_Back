import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IPlantillaServicio } from '../../dominio/contratos/aplicacion/servicios';
import { PlantillaDto, PlantillaCreacionDto, PlantillaModificacionDto } from '../../dominio/transferencia';
import { PlantillaFiltroDto } from '../../dominio/transferencia/filtros';
export declare class PlantillaService implements IPlantillaServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: PlantillaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<PlantillaDto>>;
    obtenerPorId(id: number): Promise<PlantillaDto>;
    guardar(objetoDto: PlantillaCreacionDto): Promise<RespuestaObjetoDto<PlantillaDto>>;
    modificar(id: number, objetoDto: PlantillaModificacionDto): Promise<RespuestaObjetoDto<PlantillaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const PLANTILLA_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof PlantillaService;
};
