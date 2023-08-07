"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespuestaBaseDto = void 0;
class RespuestaBaseDto {
    constructor(tipoRespuesta, mensaje) {
        this.tipoRespuesta = tipoRespuesta;
        this.mensaje = mensaje;
        this.exito = this.tipoRespuesta === 'Exito' ? true : false;
    }
}
exports.RespuestaBaseDto = RespuestaBaseDto;
//# sourceMappingURL=respuesta-base.dto.js.map