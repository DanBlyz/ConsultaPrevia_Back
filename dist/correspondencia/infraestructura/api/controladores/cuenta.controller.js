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
exports.CuentaController = void 0;
const common_1 = require("@nestjs/common");
const transferencia_1 = require("../../../../comun/transferencia");
const aplicacion_1 = require("../../../dominio/contratos/aplicacion");
const filtros_1 = require("../../../dominio/transferencia/filtros");
const transferencia_2 = require("../../../dominio/transferencia");
let CuentaController = class CuentaController {
    constructor(servicioFactory) {
        this.servicioFactory = servicioFactory;
    }
    async buscar(filtroDto) {
        const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
        const registrosPorPagina = filtroDto.paginado
            ? Number(filtroDto.paginado.registrosPorPagina)
            : 10;
        const { lista, totalRegistros } = await this.servicioFactory.cuentaServicio.buscar(filtroDto, pagina, registrosPorPagina);
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', lista, new transferencia_1.PaginadoDto(totalRegistros, registrosPorPagina, pagina));
    }
    async obtenerPorId(id) {
        const objetoDto = await this.servicioFactory.cuentaServicio.obtenerPorId(id);
        return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, '', objetoDto);
    }
    async guardar(objetoDto) {
        return await this.servicioFactory.cuentaServicio.guardar(objetoDto);
    }
    async modificar(id, objetoDto) {
        const cuentaDto = objetoDto.cuenta;
        const usuarioDto = objetoDto.usuario;
        return await this.servicioFactory.cuentaServicio.modificar(id, cuentaDto, usuarioDto);
    }
    async eliminar(id) {
        return await this.servicioFactory.cuentaServicio.eliminar(id);
    }
    async desbloquear(id) {
        return await this.servicioFactory.cuentaServicio.desbloquear(id);
    }
    async autorizar(id) {
        return await this.servicioFactory.cuentaServicio.autorizar(id);
    }
    async desautorizar(id) {
        return await this.servicioFactory.cuentaServicio.desautorizar(id);
    }
    async restablcerContrasenia(id, objetoDto) {
        return await this.servicioFactory.cuentaServicio.restablecerContrasenia(id, objetoDto.contrasenia);
    }
    async obtenerRoles(cuentaId) {
        const listaDto = await this.servicioFactory.rolCuentaServicio.obtenerporCuentaId(cuentaId);
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', listaDto, new transferencia_1.PaginadoDto(listaDto.length, listaDto.length, 1));
    }
    async obtenerRolPorId(cuentaId, id) {
        const objetoDto = await this.servicioFactory.rolCuentaServicio.obtenerPorId(id);
        return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, '', objetoDto);
    }
    async guardarRol(cuentaId, objetoDto) {
        return await this.servicioFactory.rolCuentaServicio.guardar(objetoDto);
    }
    async modificarRol(cuentaId, id, objetoDto) {
        return await this.servicioFactory.rolCuentaServicio.modificar(id, objetoDto);
    }
    async eliminarRol(cuentaId, id) {
        return await this.servicioFactory.rolCuentaServicio.eliminar(id);
    }
};
__decorate([
    (0, common_1.Post)('buscar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filtros_1.CuentaFiltroDto]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "buscar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "obtenerPorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transferencia_2.CuentaCreacionDto]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "guardar", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "modificar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Get)(':id/desbloquear'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "desbloquear", null);
__decorate([
    (0, common_1.Get)(':id/autorizar'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "autorizar", null);
__decorate([
    (0, common_1.Get)(':id/desautorizar'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "desautorizar", null);
__decorate([
    (0, common_1.Post)(':id/restablecer'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "restablcerContrasenia", null);
__decorate([
    (0, common_1.Get)(':cuentaId/roles'),
    __param(0, (0, common_1.Param)('cuentaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "obtenerRoles", null);
__decorate([
    (0, common_1.Get)(':cuentaId/roles/:id'),
    __param(0, (0, common_1.Param)('cuentaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "obtenerRolPorId", null);
__decorate([
    (0, common_1.Post)(':cuentaId/roles'),
    __param(0, (0, common_1.Param)('cuentaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transferencia_2.RolCuentaCreacionDto]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "guardarRol", null);
__decorate([
    (0, common_1.Patch)(':cuentaId/roles/:id'),
    __param(0, (0, common_1.Param)('cuentaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, transferencia_2.RolCuentaModificacionDto]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "modificarRol", null);
__decorate([
    (0, common_1.Delete)(':cuentaId/roles/:id'),
    __param(0, (0, common_1.Param)('cuentaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "eliminarRol", null);
CuentaController = __decorate([
    (0, common_1.Controller)('cuentas'),
    __param(0, (0, common_1.Inject)(aplicacion_1.SERVICIO_FACTORY)),
    __metadata("design:paramtypes", [Object])
], CuentaController);
exports.CuentaController = CuentaController;
//# sourceMappingURL=cuenta.controller.js.map