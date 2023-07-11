import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IBuzonServicio } from '../../dominio/contratos/aplicacion/servicios';
import { BuzonCreacionDto, BuzonDto, BuzonModificacionDto } from '../../dominio/transferencia';
import { BuzonFiltroDto } from '../../dominio/transferencia/filtros';
export declare class BuzonService implements IBuzonServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: BuzonFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<BuzonDto>>;
    obtenerPorId(id: number): Promise<BuzonDto>;
    guardar(objetoDto: BuzonCreacionDto): Promise<RespuestaObjetoDto<BuzonDto>>;
    modificar(id: number, objetoDto: BuzonModificacionDto): Promise<RespuestaObjetoDto<BuzonDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const BUZON_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof BuzonService;
};
