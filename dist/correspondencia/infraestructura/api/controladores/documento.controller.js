"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentoController = void 0;
const common_1 = require("@nestjs/common");
const transferencia_1 = require("../../../../comun/transferencia");
const aplicacion_1 = require("../../../dominio/contratos/aplicacion");
const filtros_1 = require("../../../dominio/transferencia/filtros");
const transferencia_2 = require("../../../dominio/transferencia");
let DocumentoController = class DocumentoController {
    constructor(servicioFactory) {
        this.servicioFactory = servicioFactory;
    }
    async buscar(filtroDto) {
        const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
        const registrosPorPagina = filtroDto.paginado
            ? Number(filtroDto.paginado.registrosPorPagina)
            : 10;
        const { lista, totalRegistros } = await this.servicioFactory.documentoServicio.buscar(filtroDto, pagina, registrosPorPagina);
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', lista, new transferencia_1.PaginadoDto(totalRegistros, registrosPorPagina, pagina));
    }
    async obtenerPorId(id) {
        const objetoDto = await this.servicioFactory.documentoServicio.obtenerPorId(id);
        return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, '', objetoDto);
    }
    async guardar(objetoDto) {
        return await this.servicioFactory.documentoServicio.guardar(objetoDto);
    }
    async modificar(id, objetoDto) {
        return await this.servicioFactory.documentoServicio.modificar(id, objetoDto);
    }
    async eliminar(id) {
        return await this.servicioFactory.documentoServicio.eliminar(id);
    }
    async obtenerParticipantesPorDocumentoId(documentoId) {
        const filtro = new filtros_1.ParticipanteFiltroDto();
        filtro.documentoId = documentoId;
        const { lista, totalRegistros } = await this.servicioFactory.participanteServicio.buscar(filtro, 1, 0);
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', lista, new transferencia_1.PaginadoDto(totalRegistros, totalRegistros, 1));
    }
    async obtenerParticipantePorId(documentoId, id) {
        const objetoDto = await this.servicioFactory.participanteServicio.obtenerPorId(id);
        return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, '', objetoDto);
    }
    async guardarParticipante(documentoId, objetoDto) {
        objetoDto.documentoId = documentoId;
        return await this.servicioFactory.participanteServicio.guardar(objetoDto);
    }
    async modificarParticipante(documentoId, id, objetoDto) {
        objetoDto.documentoId = documentoId;
        return await this.servicioFactory.participanteServicio.modificar(id, objetoDto);
    }
    async eliminarParticipante(documentoId, id) {
        return await this.servicioFactory.participanteServicio.eliminar(id);
    }
};
__decorate([
    (0, common_1.Post)('buscar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filtros_1.DocumentoFiltroDto]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "buscar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "obtenerPorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transferencia_2.DocumentoCreacionDto]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "guardar", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transferencia_2.DocumentoModificacionDto]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "modificar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Get)(':documentoId/participantes'),
    __param(0, (0, common_1.Param)('documentoId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "obtenerParticipantesPorDocumentoId", null);
__decorate([
    (0, common_1.Get)(':documentoId/participantes/:id'),
    __param(0, (0, common_1.Param)('documentoId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "obtenerParticipantePorId", null);
__decorate([
    (0, common_1.Post)(':documentoId/participantes'),
    __param(0, (0, common_1.Param)('documentoId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transferencia_2.ParticipanteCreacionDto]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "guardarParticipante", null);
__decorate([
    (0, common_1.Patch)(':documentoId/participantes/:id'),
    __param(0, (0, common_1.Param)('documentoId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, transferencia_2.ParticipanteModificacionDto]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "modificarParticipante", null);
__decorate([
    (0, common_1.Delete)(':documentoId/participantes/:id'),
    __param(0, (0, common_1.Param)('documentoId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "eliminarParticipante", null);
DocumentoController = __decorate([
    (0, common_1.Controller)('documentos'),
    __param(0, (0, common_1.Inject)(aplicacion_1.SERVICIO_FACTORY)),
    __metadata("design:paramtypes", [Object])
], DocumentoController);
exports.DocumentoController = DocumentoController;
//# sourceMappingURL=documento.controller.js.map