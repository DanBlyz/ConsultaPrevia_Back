import { Mapper } from '@automapper/core';
import { ListaPaginadaDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IUniOrganizacionalServicio } from '../../dominio/contratos/aplicacion/servicios';
import { UniOrganizacionalDto } from '../../dominio/transferencia';
import { UniOrganizacionalFiltroDto } from '../../dominio/transferencia/filtros';
export declare class UniOrganizacionalService implements IUniOrganizacionalServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    buscar(filtroDto: UniOrganizacionalFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<UniOrganizacionalDto>>;
    obtenerPorId(id: number): Promise<UniOrganizacionalDto>;
}
export declare const UNI_ORGANIZACIONAL_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof UniOrganizacionalService;
};
