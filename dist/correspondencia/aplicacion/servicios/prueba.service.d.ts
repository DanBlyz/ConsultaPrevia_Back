import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IPruebaServicio } from '../../dominio/contratos/aplicacion/servicios';
import { PruebaCreacionDto, PruebaDto, PruebaModificacionDto } from '../../dominio/transferencia';
import { PruebaFiltroDto } from '../../dominio/transferencia/filtros';
export declare class PruebaService implements IPruebaServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: PruebaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<PruebaDto>>;
    obtenerPorId(id: number): Promise<PruebaDto>;
    guardar(objetoDto: PruebaCreacionDto): Promise<RespuestaObjetoDto<PruebaDto>>;
    modificar(id: number, objetoDto: PruebaModificacionDto): Promise<RespuestaObjetoDto<PruebaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const PRUEBA_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof PruebaService;
};
