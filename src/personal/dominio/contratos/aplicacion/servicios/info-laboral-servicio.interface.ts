import {
  ListaPaginadaDto,
  RespuestaDto,
  RespuestaObjetoDto,
} from '../../../../../comun/transferencia';

import {
  InfoLaboralCreacionDto,
  InfoLaboralDto,
  InfoLaboralModificacionDto,
} from '../../../transferencia';

export const INFO_LABORAL_SERVICIO = 'INFO_LABORAL_SERVICIO';

export interface IInfoLaboralServicio {
  buscar(
    filtro: Partial<InfoLaboralDto>,
    pagina: number,
    cantidad: number,
    ordenarPor?: string,
    orden?: 'ASC' | 'DESC',
  ): Promise<ListaPaginadaDto<InfoLaboralDto>>;
  obtenerPorId(id: number): Promise<InfoLaboralDto>;
  guardar(
    objetoDto: InfoLaboralCreacionDto,
  ): Promise<RespuestaObjetoDto<InfoLaboralDto>>;
  modificar(
    id: number,
    objetoDto: InfoLaboralModificacionDto,
  ): Promise<RespuestaObjetoDto<InfoLaboralDto>>;
  eliminar(id: number): Promise<RespuestaDto>;
}
