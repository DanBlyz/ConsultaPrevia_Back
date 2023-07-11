import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IClasificacionBuzonServicio } from '../../dominio/contratos/aplicacion/servicios';
import { ClasificacionBuzon } from '../../dominio/entidades';
import { ClasificacionBuzonCreacionDto, ClasificacionBuzonDto, ClasificacionBuzonModificacionDto } from '../../dominio/transferencia';
import { ClasificacionBuzonFiltroDto } from '../../dominio/transferencia/filtros';
export declare class ClasificacionBuzonService implements IClasificacionBuzonServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtro: ClasificacionBuzonFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ClasificacionBuzonDto>>;
    obtenerPorId(id: number): Promise<ClasificacionBuzonDto>;
    guardar(objetoDto: ClasificacionBuzonCreacionDto): Promise<RespuestaObjetoDto<ClasificacionBuzon>>;
    modificar(id: number, objetoDto: ClasificacionBuzonModificacionDto): Promise<RespuestaObjetoDto<ClasificacionBuzon>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const CLASIFICACION_BUZON_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof ClasificacionBuzonService;
};
