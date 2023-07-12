import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura/persistencia';
import { IPersonaServicio } from '../../dominio/contratos/aplicacion/servicios';
import { Persona } from '../../dominio/entidades';
import { PersonaCreacionDto, PersonaDto, PersonaModificacionDto } from '../../dominio/transferencia';
import { PersonaFiltroDto } from '../../dominio/transferencia/filtros';
export declare class PersonaService implements IPersonaServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: PersonaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<PersonaDto>>;
    obtenerPorId(id: number): Promise<PersonaDto>;
    guardar(objetoDto: PersonaCreacionDto): Promise<RespuestaObjetoDto<PersonaDto>>;
    modificar(id: number, objetoDto: PersonaModificacionDto): Promise<RespuestaObjetoDto<Persona>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const PERSONA_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof PersonaService;
};
