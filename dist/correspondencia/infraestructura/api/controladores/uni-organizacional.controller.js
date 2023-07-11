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
exports.UniOrganizacionalController = void 0;
const common_1 = require("@nestjs/common");
const transferencia_1 = require("../../../../comun/transferencia");
const jwt_1 = require("../../../../comun/sesion/jwt");
const aplicacion_1 = require("../../../dominio/contratos/aplicacion");
const filtros_1 = require("../../../dominio/transferencia/filtros");
const transferencia_2 = require("../../../dominio/transferencia");
let UniOrganizacionalController = class UniOrganizacionalController {
    constructor(servicioFactory) {
        this.servicioFactory = servicioFactory;
    }
    async obtenerCodificador() {
        const { lista, totalRegistros } = await this.servicioFactory.uniOrganizacionalServicio.buscar({}, 1, 0, 'nombre', 'ASC');
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', lista.map((item) => new transferencia_1.CodificadorDto(item.id, item.nombre)), new transferencia_1.PaginadoDto(totalRegistros, totalRegistros, 1));
    }
    async buscar(filtroDto) {
        const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
        const registrosPorPagina = filtroDto.paginado
            ? Number(filtroDto.paginado.registrosPorPagina)
            : 10;
        const { lista, totalRegistros } = await this.servicioFactory.uniOrganizacionalServicio.buscar(filtroDto, pagina, registrosPorPagina);
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', lista.map((item) => {
            let objeto = new transferencia_2.UniOrganizacionalDto();
            objeto = {
                id: item.id,
                sigla: item.sigla,
                nombre: item.nombre,
                estaActiva: item.estaActiva,
            };
            return objeto;
        }), new transferencia_1.PaginadoDto(totalRegistros, registrosPorPagina, pagina));
    }
    async obtenerPorId(id) {
        const objetoDto = await this.servicioFactory.uniOrganizacionalServicio.obtenerPorId(id);
        return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, '', {
            id: objetoDto.id,
            sigla: objetoDto.sigla,
            nombre: objetoDto.nombre,
            estaActiva: objetoDto.estaActiva,
        });
    }
    async obtenerPuestosPorUniOrganizacionalId(uniOrganizacionalId) {
        const filtro = new filtros_1.PuestoFiltroDto();
        filtro.uniOrganizacionalId = uniOrganizacionalId;
        const { lista, totalRegistros } = await this.servicioFactory.puestoServicio.buscar(filtro, 1, 0, 'nivelJerarquico', 'ASC');
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', lista.map((item) => new transferencia_1.CodificadorDto(item.id, item.nombre)), new transferencia_1.PaginadoDto(totalRegistros, totalRegistros, 1));
    }
    async obtenerPersonasPorUniOrganizacionalId(uniOrganizacionalId) {
        const filtro = new filtros_1.PersonaFiltroDto();
        filtro.uniOrganizacionalId = uniOrganizacionalId;
        const { lista, totalRegistros } = await this.servicioFactory.personaServicio.buscar(filtro, 1, 0, 'primApellido', 'ASC');
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', lista.map((item) => {
            let objeto = new transferencia_2.PersonaDto();
            objeto = {
                id: item.id,
                primApellido: item.primApellido,
                segApellido: item.segApellido,
                nombre: item.nombre,
                numDocumento: item.numDocumento,
                expedicion: item.expedicion,
            };
            return objeto;
        }), new transferencia_1.PaginadoDto(totalRegistros, totalRegistros, 1));
    }
};
__decorate([
    (0, common_1.Get)('codificador'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UniOrganizacionalController.prototype, "obtenerCodificador", null);
__decorate([
    (0, common_1.Post)('buscar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filtros_1.UniOrganizacionalFiltroDto]),
    __metadata("design:returntype", Promise)
], UniOrganizacionalController.prototype, "buscar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UniOrganizacionalController.prototype, "obtenerPorId", null);
__decorate([
    (0, common_1.Get)(':uniOrganizacionalId/puestos/codificador'),
    __param(0, (0, common_1.Param)('uniOrganizacionalId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UniOrganizacionalController.prototype, "obtenerPuestosPorUniOrganizacionalId", null);
__decorate([
    (0, common_1.Get)(':uniOrganizacionalId/personas'),
    __param(0, (0, common_1.Param)('uniOrganizacionalId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UniOrganizacionalController.prototype, "obtenerPersonasPorUniOrganizacionalId", null);
UniOrganizacionalController = __decorate([
    (0, common_1.UseGuards)(jwt_1.JwtAuthGuard),
    (0, common_1.Controller)('uni-organizacionales'),
    __param(0, (0, common_1.Inject)(aplicacion_1.SERVICIO_FACTORY)),
    __metadata("design:paramtypes", [Object])
], UniOrganizacionalController);
exports.UniOrganizacionalController = UniOrganizacionalController;
//# sourceMappingURL=uni-organizacional.controller.js.map