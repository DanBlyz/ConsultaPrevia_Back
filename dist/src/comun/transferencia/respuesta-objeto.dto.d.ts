import { RespuestaBaseDto, TipoRespuesta } from '.';
export declare class RespuestaObjetoDto<T> extends RespuestaBaseDto {
    tipoRespuesta: TipoRespuesta;
    mensaje: string;
    objeto: T;
    constructor(tipoRespuesta: TipoRespuesta, mensaje: string, objeto: T);
}
