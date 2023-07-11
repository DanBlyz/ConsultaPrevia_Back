import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IContenidoServicio } from '../../dominio/contratos/aplicacion/servicios';
import { Contenido } from '../../dominio/entidades';
import { ContenidoCreacionDto, ContenidoDto, ContenidoModificacionDto } from '../../dominio/transferencia';
import { ContenidoFiltroDto } from '../../dominio/transferencia/filtros';
export declare class ContenidoService implements IContenidoServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: ContenidoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ContenidoDto>>;
    obtenerPorId(id: number): Promise<ContenidoDto>;
    guardar(objetoDto: ContenidoCreacionDto): Promise<RespuestaObjetoDto<ContenidoDto>>;
    modificar(id: number, objetoDto: ContenidoModificacionDto): Promise<RespuestaObjetoDto<Contenido>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const CONTENIDO_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof ContenidoService;
};
