import { PaginadoDto, RespuestaBaseDto, TipoRespuesta } from '.';

export class RespuestaListaDto<T> extends RespuestaBaseDto {
  constructor(
    public tipoRespuesta: TipoRespuesta,
    public mensaje: string,
    public lista: T[],
    public paginado: PaginadoDto,
  ) {
    super(tipoRespuesta, mensaje);
  }
}
