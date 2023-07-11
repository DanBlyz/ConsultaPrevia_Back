import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IAdjuntoServicio } from '../../dominio/contratos/aplicacion/servicios';
import { AdjuntoCreacionDto, AdjuntoDto, AdjuntoModificacionDto } from '../../dominio/transferencia';
import { AdjuntoFiltroDto } from '../../dominio/transferencia/filtros';
export declare class AdjuntoService implements IAdjuntoServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: AdjuntoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<AdjuntoDto>>;
    obtenerPorId(id: number): Promise<AdjuntoDto>;
    guardar(objetoDto: AdjuntoCreacionDto): Promise<RespuestaObjetoDto<AdjuntoDto>>;
    modificar(id: number, objetoDto: AdjuntoModificacionDto): Promise<RespuestaObjetoDto<AdjuntoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const ADJUNTO_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof AdjuntoService;
};
