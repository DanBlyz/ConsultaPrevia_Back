import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura/persistencia';
import { IUniOrganizacionalServicio } from '../../dominio/contratos/aplicacion/servicios';
import { UniOrganizacionalCreacionDto, UniOrganizacionalDto, UniOrganizacionalModificacionDto } from '../../dominio/transferencia';
import { UniOrganizacionalFiltroDto } from '../../dominio/transferencia/filtros';
export declare class UniOrganizacionalService implements IUniOrganizacionalServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: UniOrganizacionalFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<UniOrganizacionalDto>>;
    obtenerPorId(id: number): Promise<UniOrganizacionalDto>;
    guardar(objetoDto: UniOrganizacionalCreacionDto): Promise<RespuestaObjetoDto<UniOrganizacionalDto>>;
    modificar(id: number, objetoDto: UniOrganizacionalModificacionDto): Promise<RespuestaObjetoDto<UniOrganizacionalDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const UNI_ORGANIZACIONAL_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof UniOrganizacionalService;
};
