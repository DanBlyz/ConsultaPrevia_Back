import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IPagoCptServicio } from '../../dominio/contratos/aplicacion/servicios';
import { PagoCptCreacionDto, PagoCptDto, PagoCptModificacionDto } from '../../dominio/transferencia';
import { PagoCptFiltroDto } from '../../dominio/transferencia/filtros';
export declare class PagoCptService implements IPagoCptServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: PagoCptFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<PagoCptDto>>;
    obtenerPorId(id: number): Promise<PagoCptDto>;
    guardar(objetoDto: PagoCptCreacionDto): Promise<RespuestaObjetoDto<PagoCptDto>>;
    modificar(id: number, objetoDto: PagoCptModificacionDto): Promise<RespuestaObjetoDto<PagoCptDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const PAGO_CPT_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof PagoCptService;
};
