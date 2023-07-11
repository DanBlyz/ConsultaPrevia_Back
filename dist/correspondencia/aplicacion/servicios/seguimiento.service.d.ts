import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { ISeguimientoServicio } from '../../dominio/contratos/aplicacion/servicios';
import { SeguimientoCreacionDto, SeguimientoDto, SeguimientoModificacionDto } from '../../dominio/transferencia';
import { SeguimientoFiltroDto } from '../../dominio/transferencia/filtros';
export declare class SeguimientoService implements ISeguimientoServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: SeguimientoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<SeguimientoDto>>;
    obtenerPorId(id: number): Promise<SeguimientoDto>;
    guardar(objetoDto: SeguimientoCreacionDto): Promise<RespuestaObjetoDto<SeguimientoDto>>;
    modificar(id: number, objetoDto: SeguimientoModificacionDto): Promise<RespuestaObjetoDto<SeguimientoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const SEGUIMIENTO_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof SeguimientoService;
};
