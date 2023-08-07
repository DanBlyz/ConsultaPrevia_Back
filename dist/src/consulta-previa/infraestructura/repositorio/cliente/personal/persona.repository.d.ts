import { HttpService } from '@nestjs/axios';
import { ListaPaginada } from '../../../../../comun/modelos';
import { IPersonaRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Persona } from '../../../../dominio/entidades';
import { PersonaFiltroDto } from '../../../../dominio/transferencia/filtros';
export declare class PersonaRepositorio implements IPersonaRepositorio {
    private readonly httpService;
    private identidad;
    private urlBase;
    private controlador;
    constructor(httpService: HttpService);
    obtenerPorId(id: number): Promise<any>;
    obtenerObjetoPor(objeto: Partial<PersonaFiltroDto>, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<Persona>;
    obtenerPor(objeto: Partial<PersonaFiltroDto>, pagina: number, registrosPorPagina: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginada<Persona>>;
}
export declare const PERSONA_REPOSITORIO_PROVIDER: {
    provide: string;
    useClass: typeof PersonaRepositorio;
};
