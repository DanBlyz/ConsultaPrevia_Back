import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IReunionServicio } from '../../dominio/contratos/aplicacion/servicios';
import { ReunionCreacionDto, ReunionDto, ReunionModificacionDto } from '../../dominio/transferencia';
import { ReunionFiltroDto } from '../../dominio/transferencia/filtros';
export declare class ReunionService implements IReunionServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: ReunionFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ReunionDto>>;
    obtenerPorId(id: number): Promise<ReunionDto>;
    guardar(objetoDto: ReunionCreacionDto): Promise<RespuestaObjetoDto<ReunionDto>>;
    modificar(id: number, objetoDto: ReunionModificacionDto | any): Promise<RespuestaObjetoDto<ReunionDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const REUNION_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof ReunionService;
};
