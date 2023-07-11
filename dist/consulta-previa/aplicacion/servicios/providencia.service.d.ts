import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IProvidenciaServicio } from '../../dominio/contratos/aplicacion/servicios';
import { ProvidenciaCreacionDto, ProvidenciaDto, ProvidenciaModificacionDto } from '../../dominio/transferencia';
import { ProvidenciaFiltroDto } from '../../dominio/transferencia/filtros';
export declare class ProvidenciaService implements IProvidenciaServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: ProvidenciaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ProvidenciaDto>>;
    obtenerPorId(id: number): Promise<ProvidenciaDto>;
    guardar(objetoDto: ProvidenciaCreacionDto): Promise<RespuestaObjetoDto<ProvidenciaDto>>;
    modificar(id: number, objetoDto: ProvidenciaModificacionDto): Promise<RespuestaObjetoDto<ProvidenciaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const PROVIDENCIA_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof ProvidenciaService;
};
