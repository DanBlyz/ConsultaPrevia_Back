import { RespuestaBaseDto, TipoRespuesta } from '.';

export class RespuestaObjetoDto<T> extends RespuestaBaseDto {
  constructor(
    public tipoRespuesta: TipoRespuesta,
    public mensaje: string,
    public objeto: T,
  ) {
    super(tipoRespuesta, mensaje);
  }
}
