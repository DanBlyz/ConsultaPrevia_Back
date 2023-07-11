"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginadoDto = void 0;
class PaginadoDto {
    constructor(totalRegistros, registrosPorPagina, pagina) {
        this.totalRegistros = totalRegistros;
        this.registrosPorPagina = registrosPorPagina;
        this.pagina = pagina;
        this.totalPaginas = Math.ceil(totalRegistros / registrosPorPagina);
    }
}
exports.PaginadoDto = PaginadoDto;
//# sourceMappingURL=paginado.dto.js.map