import { TipoRespuesta } from './tipo-respuesta.enum';

export abstract class RespuestaBaseDto {
  exito?: boolean;

  constructor(public tipoRespuesta: TipoRespuesta, public mensaje: string) {
    this.exito = this.tipoRespuesta === 'Exito' ? true : false;
  }
}
