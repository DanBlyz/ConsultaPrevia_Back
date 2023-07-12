import { RespuestaBaseDto, TipoRespuesta } from '.';

export class RespuestaDto extends RespuestaBaseDto {
  constructor(public tipoRespuesta: TipoRespuesta, public mensaje: string) {
    super(tipoRespuesta, mensaje);
  }
}
