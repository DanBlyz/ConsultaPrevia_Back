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
exports.ContactoController = void 0;
const common_1 = require("@nestjs/common");
const transferencia_1 = require("../../../../comun/transferencia");
const aplicacion_1 = require("../../../dominio/contratos/aplicacion");
const filtros_1 = require("../../../dominio/transferencia/filtros");
const transferencia_2 = require("../../../dominio/transferencia");
let ContactoController = class ContactoController {
    constructor(servicioFactory) {
        this.servicioFactory = servicioFactory;
    }
    async buscar(filtroDto) {
        const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
        const registrosPorPagina = filtroDto.paginado
            ? Number(filtroDto.paginado.registrosPorPagina)
            : 10;
        const { lista, totalRegistros } = await this.servicioFactory.contactoServicio.buscar(filtroDto, pagina, registrosPorPagina);
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', lista, new transferencia_1.PaginadoDto(totalRegistros, registrosPorPagina, pagina));
    }
    async obtenerPorId(id) {
        const objetoDto = await this.servicioFactory.contactoServicio.obtenerPorId(id);
        return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, '', objetoDto);
    }
    async guardar(objetoDto) {
        return await this.servicioFactory.contactoServicio.guardar(objetoDto);
    }
    async modificar(id, objetoDto) {
        return await this.servicioFactory.contactoServicio.modificar(id, objetoDto);
    }
    async eliminar(id) {
        return await this.servicioFactory.contactoServicio.eliminar(id);
    }
};
__decorate([
    (0, common_1.Post)('buscar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filtros_1.ContactoFiltroDto]),
    __metadata("design:returntype", Promise)
], ContactoController.prototype, "buscar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContactoController.prototype, "obtenerPorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transferencia_2.ContactoCreacionDto]),
    __metadata("design:returntype", Promise)
], ContactoController.prototype, "guardar", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transferencia_2.ContactoModificacionDto]),
    __metadata("design:returntype", Promise)
], ContactoController.prototype, "modificar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContactoController.prototype, "eliminar", null);
ContactoController = __decorate([
    (0, common_1.Controller)('contactos'),
    __param(0, (0, common_1.Inject)(aplicacion_1.SERVICIO_FACTORY)),
    __metadata("design:paramtypes", [Object])
], ContactoController);
exports.ContactoController = ContactoController;
//# sourceMappingURL=contacto.controller.js.map