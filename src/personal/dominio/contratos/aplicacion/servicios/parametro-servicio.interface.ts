import {
  ListaPaginadaDto,
  RespuestaDto,
  RespuestaObjetoDto,
} from '../../../../../comun/transferencia';

import {
  ParametroCreacionDto,
  ParametroDto,
  ParametroModificacionDto,
} from '../../../transferencia';
import { ParametroFiltroDto } from '../../../transferencia/filtros';

export const PARAMETRO_SERVICIO = 'PARAMETRO_SERVICIO';

export interface IParametroServicio {
  buscar(
    filtro: Partial<ParametroFiltroDto>,
    pagina: number,
    cantidad: number,
    ordenarPor?: string,
    orden?: 'ASC' | 'DESC',
  ): Promise<ListaPaginadaDto<ParametroDto>>;
  obtenerPorId(id: number): Promise<ParametroDto>;
  guardar(
    objetoDto: ParametroCreacionDto,
  ): Promise<RespuestaObjetoDto<ParametroDto>>;
  modificar(
    id: number,
    objetoDto: ParametroModificacionDto,
  ): Promise<RespuestaObjetoDto<ParametroDto>>;
  eliminar(id: number): Promise<RespuestaDto>;
}
