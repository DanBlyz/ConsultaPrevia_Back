import {
  ListaPaginadaDto,
  RespuestaDto,
  RespuestaObjetoDto,
} from '../../../../../comun/transferencia';

import {
  PuestoPersonaCreacionDto,
  PuestoPersonaDto,
  PuestoPersonaModificacionDto,
} from '../../../transferencia';
import { PuestoPersonaFiltroDto } from '../../../transferencia/filtros';

export const PUESTO_PERSONA_SERVICIO = 'PUESTO_PERSONA_SERVICIO';

export interface IPuestoPersonaServicio {
  buscar(
    filtro: Partial<PuestoPersonaFiltroDto>,
    pagina: number,
    cantidad: number,
    ordenarPor?: string,
    orden?: 'ASC' | 'DESC',
  ): Promise<ListaPaginadaDto<PuestoPersonaDto>>;
  obtenerPorId(id: number): Promise<PuestoPersonaDto>;

  modificar(
    id: number,
    objetoDto: PuestoPersonaModificacionDto,
  ): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;

  guardarIncorporacion(
    objetoDto: PuestoPersonaCreacionDto,
  ): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
  guardarReasignacion(
    objetoDto: PuestoPersonaCreacionDto,
  ): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
  registrarDesvinculacion(
    id: number,
    fecConclusion: Date,
  ): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
  darBaja(id: number): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
  anular(id: number): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;

  guardarInterinato(
    objetoDto: PuestoPersonaCreacionDto,
  ): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
  modificarInterinato(
    id: number,
    objetoDto: Partial<PuestoPersonaModificacionDto>,
  ): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
  eliminarInterinato(id: number): Promise<RespuestaDto>;
  darBajaInterinato(id: number): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
}
