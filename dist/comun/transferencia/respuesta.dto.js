"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespuestaDto = void 0;
const _1 = require(".");
class RespuestaDto extends _1.RespuestaBaseDto {
    constructor(tipoRespuesta, mensaje) {
        super(tipoRespuesta, mensaje);
        this.tipoRespuesta = tipoRespuesta;
        this.mensaje = mensaje;
    }
}
exports.RespuestaDto = RespuestaDto;
//# sourceMappingURL=respuesta.dto.js.map