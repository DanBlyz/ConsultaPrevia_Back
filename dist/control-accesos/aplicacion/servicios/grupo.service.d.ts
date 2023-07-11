import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura/persistencia';
import { IGrupoServicio } from '../../dominio/contratos/aplicacion/servicios';
import { GrupoCreacionDto, GrupoDto, GrupoModificacionDto } from '../../dominio/transferencia';
import { GrupoFiltroDto } from '../../dominio/transferencia/filtros';
export declare class GrupoService implements IGrupoServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    buscar(filtroDto: GrupoFiltroDto, pagina: number, cantidad: number): Promise<ListaPaginadaDto<GrupoDto>>;
    obtenerPorId(id: number): Promise<GrupoDto>;
    guardar(objetoDto: GrupoCreacionDto): Promise<RespuestaObjetoDto<GrupoDto>>;
    modificar(id: number, objetoDto: GrupoModificacionDto): Promise<RespuestaObjetoDto<GrupoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const GRUPO_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof GrupoService;
};
