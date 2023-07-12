import {
  ListaPaginadaDto,
  RespuestaDto,
  RespuestaObjetoDto,
} from '../../../../../comun/transferencia';

import {
  PuestoCreacionDto,
  PuestoDto,
  PuestoModificacionDto,
} from '../../../transferencia';
import { PuestoFiltroDto } from '../../../transferencia/filtros';

export const PUESTO_SERVICIO = 'PUESTO_SERVICIO';

export interface IPuestoServicio {
  buscar(
    filtro: Partial<PuestoFiltroDto>,
    pagina: number,
    cantidad: number,
    ordenarPor?: string,
    orden?: 'ASC' | 'DESC',
  ): Promise<ListaPaginadaDto<PuestoDto>>;
  obtenerPorId(id: number): Promise<PuestoDto>;
  guardar(objetoDto: PuestoCreacionDto): Promise<RespuestaObjetoDto<PuestoDto>>;
  modificar(
    id: number,
    objetoDto: PuestoModificacionDto,
  ): Promise<RespuestaObjetoDto<PuestoDto>>;
  eliminar(id: number): Promise<RespuestaDto>;
}
