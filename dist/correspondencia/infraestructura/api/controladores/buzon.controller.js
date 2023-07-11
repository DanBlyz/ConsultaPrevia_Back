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
exports.BuzonController = void 0;
const common_1 = require("@nestjs/common");
const transferencia_1 = require("../../../../comun/transferencia");
const jwt_1 = require("../../../../comun/sesion/jwt");
const aplicacion_1 = require("../../../dominio/contratos/aplicacion");
const filtros_1 = require("../../../dominio/transferencia/filtros");
const transferencia_2 = require("../../../dominio/transferencia");
let BuzonController = class BuzonController {
    constructor(servicioFactory) {
        this.servicioFactory = servicioFactory;
    }
    async obtenerPorRefUniOrganizacionalId(refUniOrganizazionalId) {
        const filtroDto = new filtros_1.BuzonFiltroDto();
        filtroDto.refUniOrganizacionalId = refUniOrganizazionalId;
        filtroDto.estado = 'ACTIVO';
        const { lista, totalRegistros } = await this.servicioFactory.buzonServicio.buscar(filtroDto, 0, 0);
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', lista, new transferencia_1.PaginadoDto(totalRegistros, totalRegistros, 1));
    }
    async buscar(filtroDto) {
        const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
        const registrosPorPagina = filtroDto.paginado
            ? Number(filtroDto.paginado.registrosPorPagina)
            : 10;
        const { lista, totalRegistros } = await this.servicioFactory.buzonServicio.buscar(filtroDto, pagina, registrosPorPagina);
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', lista, new transferencia_1.PaginadoDto(totalRegistros, registrosPorPagina, pagina));
    }
    async obtenerPorId(id) {
        const objetoDto = await this.servicioFactory.buzonServicio.obtenerPorId(id);
        return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, '', objetoDto);
    }
    async guardar(objetoDto) {
        return await this.servicioFactory.buzonServicio.guardar(objetoDto);
    }
    async modificar(id, objetoDto) {
        return await this.servicioFactory.buzonServicio.modificar(id, objetoDto);
    }
    async eliminar(id) {
        return await this.servicioFactory.buzonServicio.eliminar(id);
    }
    async obtenerBuzonUsuarioPorBuzonId(buzonId) {
        const filtro = new filtros_1.BuzonUsuarioFiltroDto();
        filtro.buzonId = buzonId;
        const { lista, totalRegistros } = await this.servicioFactory.buzonUsuarioServicio.buscar(filtro, 1, 0);
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', lista, new transferencia_1.PaginadoDto(totalRegistros, totalRegistros, 1));
    }
    async obtenerBuzonUsuarioPorId(buzonId, id) {
        const objetoDto = await this.servicioFactory.buzonUsuarioServicio.obtenerPorId(id);
        return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, '', objetoDto);
    }
    async guardarBuzonUsuario(buzonId, objetoDto) {
        return await this.servicioFactory.buzonUsuarioServicio.guardar(objetoDto);
    }
    async modificarBuzonUsuario(buzonId, id, objetoDto) {
        return await this.servicioFactory.buzonUsuarioServicio.modificar(id, objetoDto);
    }
    async eliminarBuzonUsuario(buzonId, id) {
        return await this.servicioFactory.buzonUsuarioServicio.eliminar(id);
    }
};
__decorate([
    (0, common_1.Get)('uni-organizacional/:refUniOrganizazionalId'),
    __param(0, (0, common_1.Param)('refUniOrganizazionalId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BuzonController.prototype, "obtenerPorRefUniOrganizacionalId", null);
__decorate([
    (0, common_1.Post)('buscar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filtros_1.BuzonFiltroDto]),
    __metadata("design:returntype", Promise)
], BuzonController.prototype, "buscar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BuzonController.prototype, "obtenerPorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transferencia_2.BuzonCreacionDto]),
    __metadata("design:returntype", Promise)
], BuzonController.prototype, "guardar", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transferencia_2.BuzonModificacionDto]),
    __metadata("design:returntype", Promise)
], BuzonController.prototype, "modificar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BuzonController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Get)(':buzonId/usuarios'),
    __param(0, (0, common_1.Param)('buzonId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BuzonController.prototype, "obtenerBuzonUsuarioPorBuzonId", null);
__decorate([
    (0, common_1.Get)(':buzonId/usuarios/:id'),
    __param(0, (0, common_1.Param)('buzonId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], BuzonController.prototype, "obtenerBuzonUsuarioPorId", null);
__decorate([
    (0, common_1.Post)(':buzonId/usuarios'),
    __param(0, (0, common_1.Param)('buzonId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transferencia_2.BuzonUsuarioCreacionDto]),
    __metadata("design:returntype", Promise)
], BuzonController.prototype, "guardarBuzonUsuario", null);
__decorate([
    (0, common_1.Patch)(':buzonId/usuarios/:id'),
    __param(0, (0, common_1.Param)('buzonId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, transferencia_2.BuzonUsuarioModificacionDto]),
    __metadata("design:returntype", Promise)
], BuzonController.prototype, "modificarBuzonUsuario", null);
__decorate([
    (0, common_1.Delete)(':buzonId/usuarios/:id'),
    __param(0, (0, common_1.Param)('buzonId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], BuzonController.prototype, "eliminarBuzonUsuario", null);
BuzonController = __decorate([
    (0, common_1.UseGuards)(jwt_1.JwtAuthGuard),
    (0, common_1.Controller)('buzones'),
    __param(0, (0, common_1.Inject)(aplicacion_1.SERVICIO_FACTORY)),
    __metadata("design:paramtypes", [Object])
], BuzonController);
exports.BuzonController = BuzonController;
//# sourceMappingURL=buzon.controller.js.map