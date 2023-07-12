import {
    ListaPaginadaDto,
    RespuestaDto,
    RespuestaObjetoDto,
  } from '../../../../../comun/transferencia';
  
  import {
    InformeCreacionDto,
    InformeDto,
    InformeModificacionDto,
  } from '../../../../dominio/transferencia';
  import { InformeFiltroDto } from '../../../transferencia/filtros';
  
  export const INFORME_SERVICIO = 'INFORME_SERVICIO';
  
  export interface IInformeServicio {
    buscar(
      filtroDto: InformeFiltroDto,
      pagina: number,
      cantidad: number,
      ordenarPor?: string,
      orden?: 'ASC' | 'DESC',
    ): Promise<ListaPaginadaDto<InformeDto>>;
    obtenerPorId(id: number): Promise<InformeDto>;
    guardar(
      objetoDto: InformeCreacionDto,
    ): Promise<RespuestaObjetoDto<InformeDto>>;
    modificar(
      id: number,
      objetoDto: InformeModificacionDto,
    ): Promise<RespuestaObjetoDto<InformeDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
  }
  