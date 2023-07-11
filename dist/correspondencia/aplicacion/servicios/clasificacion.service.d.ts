import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IClasificacionServicio } from '../../dominio/contratos/aplicacion/servicios';
import { ClasificacionCreacionDto, ClasificacionDto, ClasificacionModificacionDto } from '../../dominio/transferencia';
import { ClasificacionFiltroDto } from '../../dominio/transferencia/filtros';
export declare class ClasificacionService implements IClasificacionServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: ClasificacionFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ClasificacionDto>>;
    obtenerPorId(id: number): Promise<ClasificacionDto>;
    guardar(objetoDto: ClasificacionCreacionDto): Promise<RespuestaObjetoDto<ClasificacionDto>>;
    modificar(id: number, objetoDto: ClasificacionModificacionDto): Promise<RespuestaObjetoDto<ClasificacionDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const CLASIFICACION_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof ClasificacionService;
};
