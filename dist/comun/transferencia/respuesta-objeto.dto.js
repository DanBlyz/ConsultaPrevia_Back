"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespuestaObjetoDto = void 0;
const _1 = require(".");
class RespuestaObjetoDto extends _1.RespuestaBaseDto {
    constructor(tipoRespuesta, mensaje, objeto) {
        super(tipoRespuesta, mensaje);
        this.tipoRespuesta = tipoRespuesta;
        this.mensaje = mensaje;
        this.objeto = objeto;
    }
}
exports.RespuestaObjetoDto = RespuestaObjetoDto;
//# sourceMappingURL=respuesta-objeto.dto.js.map