import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { ITramiteServicio } from '../../dominio/contratos/aplicacion/servicios';
import { TramiteCreacionDto, TramiteDto, TramiteModificacionDto } from '../../dominio/transferencia';
import { TramiteFiltroDto } from '../../dominio/transferencia/filtros';
export declare class TramiteService implements ITramiteServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: TramiteFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<TramiteDto>>;
    obtenerPorId(id: number): Promise<TramiteDto>;
    guardar(objetoDto: TramiteCreacionDto): Promise<RespuestaObjetoDto<TramiteDto>>;
    modificar(id: number, objetoDto: TramiteModificacionDto | any): Promise<RespuestaObjetoDto<TramiteDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const TRAMITE_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof TramiteService;
};
