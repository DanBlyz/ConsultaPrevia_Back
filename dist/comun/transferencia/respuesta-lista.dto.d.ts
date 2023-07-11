import { PaginadoDto, RespuestaBaseDto, TipoRespuesta } from '.';
export declare class RespuestaListaDto<T> extends RespuestaBaseDto {
    tipoRespuesta: TipoRespuesta;
    mensaje: string;
    lista: T[];
    paginado: PaginadoDto;
    constructor(tipoRespuesta: TipoRespuesta, mensaje: string, lista: T[], paginado: PaginadoDto);
}
