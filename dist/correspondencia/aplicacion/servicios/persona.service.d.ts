import { Mapper } from '@automapper/core';
import { ListaPaginadaDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IPersonaServicio } from '../../dominio/contratos/aplicacion/servicios';
import { PersonaFiltroDto } from '../../dominio/transferencia/filtros';
import { PersonaDto } from '../../dominio/transferencia';
export declare class PersonaService implements IPersonaServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    buscar(filtroDto: PersonaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<PersonaDto>>;
    obtenerPorId(id: number): Promise<PersonaDto>;
}
export declare const PERSONA_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof PersonaService;
};
