import { HttpService } from '@nestjs/axios';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IPuestoRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Puesto } from '../../../../dominio/entidades';
import { PuestoFiltroDto } from '../../../../dominio/transferencia/filtros';
export declare class PuestoRepositorio implements IPuestoRepositorio {
    private readonly httpService;
    private identidad;
    private urlBase;
    private controlador;
    constructor(httpService: HttpService);
    obtenerPorId(id: number): Promise<any>;
    obtenerObjetoPor(objeto: Partial<PuestoFiltroDto>, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Puesto>;
    obtenerPor(objeto: Partial<PuestoFiltroDto>, pagina: number, registrosPorPagina: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Puesto>>;
}
export declare const PUESTO_REPOSITORIO_PROVIDER: {
    provide: string;
    useClass: typeof PuestoRepositorio;
};
