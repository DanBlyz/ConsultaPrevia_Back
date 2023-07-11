import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { INotaServicio } from '../../dominio/contratos/aplicacion/servicios';
import { NotaCreacionDto, NotaDto, NotaModificacionDto } from '../../dominio/transferencia';
import { NotaFiltroDto } from '../../dominio/transferencia/filtros';
export declare class NotaService implements INotaServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: NotaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<NotaDto>>;
    obtenerPorId(id: number): Promise<NotaDto>;
    guardar(objetoDto: NotaCreacionDto): Promise<RespuestaObjetoDto<NotaDto>>;
    modificar(id: number, objetoDto: NotaModificacionDto): Promise<RespuestaObjetoDto<NotaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const NOTA_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof NotaService;
};
