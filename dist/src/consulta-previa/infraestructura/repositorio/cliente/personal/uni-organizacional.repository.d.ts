import { HttpService } from '@nestjs/axios';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IUniOrganizacionalRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { UniOrganizacional } from '../../../../dominio/entidades';
import { UniOrganizacionalFiltro } from '../../../../dominio/entidades/filtros';
export declare class UniOrganizacionalRepositorio implements IUniOrganizacionalRepositorio {
    private readonly httpService;
    private identidad;
    private urlBase;
    private controlador;
    constructor(httpService: HttpService);
    obtenerPorId(id: number): Promise<any>;
    obtenerObjetoPor(objeto: Partial<UniOrganizacionalFiltro>, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<UniOrganizacional>;
    obtenerPor(objeto: Partial<UniOrganizacionalFiltro>, pagina: number, registrosPorPagina: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<UniOrganizacional>>;
}
export declare const UNI_ORGANIZACIONAL_REPOSITORIO_PROVIDER: {
    provide: string;
    useClass: typeof UniOrganizacionalRepositorio;
};
