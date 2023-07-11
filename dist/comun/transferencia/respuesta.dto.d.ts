import { RespuestaBaseDto, TipoRespuesta } from '.';
export declare class RespuestaDto extends RespuestaBaseDto {
    tipoRespuesta: TipoRespuesta;
    mensaje: string;
    constructor(tipoRespuesta: TipoRespuesta, mensaje: string);
}
