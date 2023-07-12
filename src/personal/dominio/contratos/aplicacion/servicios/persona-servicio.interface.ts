import {
  ListaPaginadaDto,
  RespuestaDto,
  RespuestaObjetoDto,
} from '../../../../../comun/transferencia';

import {
  PersonaCreacionDto,
  PersonaDto,
  PersonaModificacionDto,
} from '../../../transferencia';
import { PersonaFiltroDto } from '../../../transferencia/filtros';

export const PERSONA_SERVICIO = 'PERSONA_SERVICIO';

export interface IPersonaServicio {
  buscar(
    filtro: Partial<PersonaFiltroDto>,
    pagina: number,
    cantidad: number,
    ordenarPor?: string,
    orden?: 'ASC' | 'DESC',
  ): Promise<ListaPaginadaDto<PersonaDto>>;
  obtenerPorId(id: number): Promise<PersonaDto>;
  guardar(
    objetoDto: PersonaCreacionDto,
  ): Promise<RespuestaObjetoDto<PersonaDto>>;
  modificar(
    id: number,
    objetoDto: PersonaModificacionDto,
  ): Promise<RespuestaObjetoDto<PersonaDto>>;
  eliminar(id: number): Promise<RespuestaDto>;
}
