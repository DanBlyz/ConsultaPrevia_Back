import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IContenidoDetalleServicio } from '../../dominio/contratos/aplicacion/servicios';
import { ContenidoDetalle } from '../../dominio/entidades';
import { ContenidoDetalleCreacionDto, ContenidoDetalleDto, ContenidoDetalleModificacionDto } from '../../dominio/transferencia';
import { ContenidoDetalleFiltroDto } from '../../dominio/transferencia/filtros';
export declare class ContenidoDetalleService implements IContenidoDetalleServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: ContenidoDetalleFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ContenidoDetalleDto>>;
    obtenerPorId(id: number): Promise<ContenidoDetalleDto>;
    guardar(objetoDto: ContenidoDetalleCreacionDto): Promise<RespuestaObjetoDto<ContenidoDetalle>>;
    modificar(id: number, objetoDto: ContenidoDetalleModificacionDto): Promise<RespuestaObjetoDto<ContenidoDetalle>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const CONTENIDO_DETALLE_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof ContenidoDetalleService;
};
