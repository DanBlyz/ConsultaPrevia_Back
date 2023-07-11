import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { INotificacionServicio } from '../../dominio/contratos/aplicacion/servicios';
import { NotificacionCreacionDto, NotificacionDto, NotificacionModificacionDto } from '../../dominio/transferencia';
import { NotificacionFiltroDto } from '../../dominio/transferencia/filtros';
export declare class NotificacionService implements INotificacionServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: NotificacionFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<NotificacionDto>>;
    obtenerPorId(id: number): Promise<NotificacionDto>;
    guardar(objetoDto: NotificacionCreacionDto): Promise<RespuestaObjetoDto<NotificacionDto>>;
    modificar(id: number, objetoDto: NotificacionModificacionDto): Promise<RespuestaObjetoDto<NotificacionDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const NOTIFICACION_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof NotificacionService;
};
