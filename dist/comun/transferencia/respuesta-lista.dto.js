"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespuestaListaDto = void 0;
const _1 = require(".");
class RespuestaListaDto extends _1.RespuestaBaseDto {
    constructor(tipoRespuesta, mensaje, lista, paginado) {
        super(tipoRespuesta, mensaje);
        this.tipoRespuesta = tipoRespuesta;
        this.mensaje = mensaje;
        this.lista = lista;
        this.paginado = paginado;
    }
}
exports.RespuestaListaDto = RespuestaListaDto;
//# sourceMappingURL=respuesta-lista.dto.js.map