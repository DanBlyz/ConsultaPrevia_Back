import {
    ListaPaginadaDto,
    RespuestaDto,
    RespuestaObjetoDto,
  } from '../../../../../comun/transferencia';
  
  import {
    ViajeCreacionDto,
    ViajeDto,
    ViajeModificacionDto,
  } from '../../../../dominio/transferencia';
  import { ViajeFiltroDto } from '../../../transferencia/filtros';
  
  export const VIAJE_SERVICIO = 'VIAJE_SERVICIO';
  
  export interface IViajeServicio {
    buscar(
      filtroDto: ViajeFiltroDto,
      pagina: number,
      cantidad: number,
      ordenarPor?: string,
      orden?: 'ASC' | 'DESC',
    ): Promise<ListaPaginadaDto<ViajeDto>>;
    obtenerPorId(id: number): Promise<ViajeDto>;
    guardar(
      objetoDto: ViajeCreacionDto,
    ): Promise<RespuestaObjetoDto<ViajeDto>>;
    modificar(
      id: number,
      objetoDto: ViajeModificacionDto,
    ): Promise<RespuestaObjetoDto<ViajeDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
  }
  