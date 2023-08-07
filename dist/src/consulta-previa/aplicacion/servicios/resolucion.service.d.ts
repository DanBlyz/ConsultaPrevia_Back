import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IResolucionServicio } from '../../dominio/contratos/aplicacion/servicios';
import { ResolucionCreacionDto, ResolucionDto, ResolucionModificacionDto } from '../../dominio/transferencia';
import { ResolucionFiltroDto } from '../../dominio/transferencia/filtros';
export declare class ResolucionService implements IResolucionServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: ResolucionFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ResolucionDto>>;
    obtenerPorId(id: number): Promise<ResolucionDto>;
    guardar(objetoDto: ResolucionCreacionDto): Promise<RespuestaObjetoDto<ResolucionDto>>;
    modificar(id: number, objetoDto: ResolucionModificacionDto): Promise<RespuestaObjetoDto<ResolucionDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const RESOLUCION_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof ResolucionService;
};
