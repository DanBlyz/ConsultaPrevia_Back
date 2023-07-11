import { TipoRespuesta } from './tipo-respuesta.enum';
export declare abstract class RespuestaBaseDto {
    tipoRespuesta: TipoRespuesta;
    mensaje: string;
    exito?: boolean;
    constructor(tipoRespuesta: TipoRespuesta, mensaje: string);
}
