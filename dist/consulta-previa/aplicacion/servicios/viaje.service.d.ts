import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IViajeServicio } from '../../dominio/contratos/aplicacion/servicios';
import { ViajeCreacionDto, ViajeDto, ViajeModificacionDto } from '../../dominio/transferencia';
import { ViajeFiltroDto } from '../../dominio/transferencia/filtros';
export declare class ViajeService implements IViajeServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: ViajeFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ViajeDto>>;
    obtenerPorId(id: number): Promise<ViajeDto>;
    guardar(objetoDto: ViajeCreacionDto): Promise<RespuestaObjetoDto<ViajeDto>>;
    modificar(id: number, objetoDto: ViajeModificacionDto): Promise<RespuestaObjetoDto<ViajeDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const VIAJE_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof ViajeService;
};
