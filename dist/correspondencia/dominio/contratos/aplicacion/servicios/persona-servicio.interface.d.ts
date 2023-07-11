import { ListaPaginadaDto } from '../../../../../comun/transferencia';
import { PersonaDto } from '../../../transferencia';
import { PersonaFiltroDto } from '../../../transferencia/filtros';
export declare const PERSONA_SERVICIO = "PERSONA_SERVICIO";
export interface IPersonaServicio {
    buscar(filtroDto: PersonaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<PersonaDto>>;
    obtenerPorId(id: number): Promise<PersonaDto>;
}
