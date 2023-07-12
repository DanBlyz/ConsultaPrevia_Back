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
exports.PersonaController = void 0;
const common_1 = require("@nestjs/common");
const auxiliares_1 = require("../../../../comun/auxiliares");
const transferencia_1 = require("../../../../comun/transferencia");
const jwt_1 = require("../../../../comun/sesion/jwt");
const sesion_1 = require("../../../../comun/sesion");
const aplicacion_1 = require("../../../dominio/contratos/aplicacion");
const transferencia_2 = require("../../../dominio/transferencia");
const filtros_1 = require("../../../dominio/transferencia/filtros");
let PersonaController = class PersonaController {
    constructor(servicioFactory) {
        this.servicioFactory = servicioFactory;
    }
    async directorio(filtro) {
        const pagina = filtro.paginado ? Number(filtro.paginado.pagina) : 1;
        const registrosPorPagina = filtro.paginado
            ? Number(filtro.paginado.registrosPorPagina)
            : 10;
        filtro.estadoLaboral = 'ACTIVO';
        const { lista, totalRegistros } = await this.servicioFactory.personaServicio.buscar(filtro, pagina, registrosPorPagina);
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', lista, new transferencia_1.PaginadoDto(totalRegistros, registrosPorPagina, pagina));
    }
    async buscar(filtroDto) {
        const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
        const registrosPorPagina = filtroDto.paginado
            ? Number(filtroDto.paginado.registrosPorPagina)
            : 10;
        const { lista, totalRegistros } = await this.servicioFactory.personaServicio.buscar(filtroDto, pagina, registrosPorPagina);
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', lista, new transferencia_1.PaginadoDto(totalRegistros, registrosPorPagina, pagina));
    }
    async obtenerPorId(id) {
        const objetoDto = await this.servicioFactory.personaServicio.obtenerPorId(id);
        return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, '', objetoDto);
    }
    async guardar(objetoDto) {
        return await this.servicioFactory.personaServicio.guardar(objetoDto);
    }
    async modificar(id, objetoDto) {
        return await this.servicioFactory.personaServicio.modificar(id, objetoDto);
    }
    async eliminar(id) {
        return await this.servicioFactory.personaServicio.eliminar(id);
    }
    async obtenerFotografiaPorCodigo(personaCodigo, response) {
        const objetoDto = await this.servicioFactory.fotografiaServicio.obtenerPorCodigo(personaCodigo);
        if (objetoDto) {
            const stream = auxiliares_1.FuncionesHelper.obtenerStream(objetoDto.archivo);
            return stream.pipe(response);
        }
        else {
            throw new common_1.NotFoundException('Recurso no encontrado');
        }
    }
    async guardarFotografia(personaId, objetoDto) {
        objetoDto.id = personaId;
        return await this.servicioFactory.fotografiaServicio.guardar(objetoDto);
    }
    async eliminarFotografia(personaId, id) {
        return await this.servicioFactory.fotografiaServicio.eliminar(id);
    }
    async modificarInfoLaboral(personaId, objetoDto) {
        return await this.servicioFactory.infoLaboralServicio.modificar(personaId, objetoDto);
    }
    async obtenerPuestoPersonaPorPersonaId(personaId) {
        const filtro = new filtros_1.PuestoPersonaFiltroDto();
        filtro.personaId = personaId;
        const { lista, totalRegistros } = await this.servicioFactory.puestoPersonaServicio.buscar(filtro, 1, 0);
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', lista, new transferencia_1.PaginadoDto(totalRegistros, totalRegistros, 1));
    }
    async obtenerPuestoPersonaPorId(id) {
        const objetoDto = await this.servicioFactory.puestoPersonaServicio.obtenerPorId(id);
        return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, '', objetoDto);
    }
    async modificarPuestoPersona(personaId, id, objetoDto) {
        return await this.servicioFactory.puestoPersonaServicio.modificar(id, objetoDto);
    }
    async guardarIncorporacion(personaId, objetoDto) {
        objetoDto.personaId = personaId;
        return await this.servicioFactory.puestoPersonaServicio.guardarIncorporacion(objetoDto);
    }
    async guardarReasignacion(personaId, objetoDto) {
        objetoDto.personaId = personaId;
        return await this.servicioFactory.puestoPersonaServicio.guardarReasignacion(objetoDto);
    }
    async registrarDesvinculacion(personaId, id, objetoDto) {
        return await this.servicioFactory.puestoPersonaServicio.registrarDesvinculacion(id, objetoDto.fecConclusion);
    }
    async darBaja(personaId, id) {
        return await this.servicioFactory.puestoPersonaServicio.darBaja(id);
    }
    async anularMovilidad(personaId, id) {
        return await this.servicioFactory.puestoPersonaServicio.anular(id);
    }
    async guardarInterinato(personaId, objetoDto) {
        objetoDto.personaId = personaId;
        return await this.servicioFactory.puestoPersonaServicio.guardarInterinato(objetoDto);
    }
    async modificarInterinato(personaId, id, objetoDto) {
        return await this.servicioFactory.puestoPersonaServicio.modificarInterinato(id, objetoDto);
    }
    async eliminarInterinato(personaId, id) {
        return await this.servicioFactory.puestoPersonaServicio.eliminarInterinato(id);
    }
    async darBajaInterinato(personaId, id) {
        return await this.servicioFactory.puestoPersonaServicio.darBajaInterinato(id);
    }
};
__decorate([
    (0, common_1.Post)('directorio'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "directorio", null);
__decorate([
    (0, common_1.Post)('buscar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filtros_1.PersonaFiltroDto]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "buscar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "obtenerPorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transferencia_2.PersonaCreacionDto]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "guardar", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transferencia_2.PersonaModificacionDto]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "modificar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "eliminar", null);
__decorate([
    (0, sesion_1.Public)(),
    (0, common_1.Get)('-/fotografias/:personaCodigo'),
    __param(0, (0, common_1.Param)('personaCodigo')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "obtenerFotografiaPorCodigo", null);
__decorate([
    (0, common_1.Post)(':personaId/fotografias'),
    __param(0, (0, common_1.Param)('personaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transferencia_2.FotografiaCreacionDto]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "guardarFotografia", null);
__decorate([
    (0, common_1.Delete)(':personaId/fotografias/:id'),
    __param(0, (0, common_1.Param)('personaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "eliminarFotografia", null);
__decorate([
    (0, common_1.Patch)(':personaId/info-laboral'),
    __param(0, (0, common_1.Param)('personaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transferencia_2.InfoLaboralModificacionDto]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "modificarInfoLaboral", null);
__decorate([
    (0, common_1.Get)(':personaId/puestos/'),
    __param(0, (0, common_1.Param)('personaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "obtenerPuestoPersonaPorPersonaId", null);
__decorate([
    (0, common_1.Get)(':personaId/puestos/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "obtenerPuestoPersonaPorId", null);
__decorate([
    (0, common_1.Patch)(':personaId/puestos/:id'),
    __param(0, (0, common_1.Param)('personaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, transferencia_2.PuestoPersonaModificacionDto]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "modificarPuestoPersona", null);
__decorate([
    (0, common_1.Post)(':personaId/puestos/incorporar'),
    __param(0, (0, common_1.Param)('personaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transferencia_2.PuestoPersonaCreacionDto]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "guardarIncorporacion", null);
__decorate([
    (0, common_1.Post)(':personaId/puestos/reasignar'),
    __param(0, (0, common_1.Param)('personaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transferencia_2.PuestoPersonaCreacionDto]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "guardarReasignacion", null);
__decorate([
    (0, common_1.Patch)(':personaId/puestos/:id/desvincular'),
    __param(0, (0, common_1.Param)('personaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "registrarDesvinculacion", null);
__decorate([
    (0, common_1.Patch)(':personaId/puestos/:id/dar-baja'),
    __param(0, (0, common_1.Param)('personaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "darBaja", null);
__decorate([
    (0, common_1.Patch)(':personaId/puestos/:id/anular'),
    __param(0, (0, common_1.Param)('personaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "anularMovilidad", null);
__decorate([
    (0, common_1.Post)(':personaId/puestos/interinato'),
    __param(0, (0, common_1.Param)('personaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transferencia_2.PuestoPersonaCreacionDto]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "guardarInterinato", null);
__decorate([
    (0, common_1.Patch)(':prsonaId/puestos/:id/interinato'),
    __param(0, (0, common_1.Param)('personaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, transferencia_2.PuestoPersonaModificacionDto]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "modificarInterinato", null);
__decorate([
    (0, common_1.Delete)(':personaId/puestos/:id/interinato'),
    __param(0, (0, common_1.Param)('personaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "eliminarInterinato", null);
__decorate([
    (0, common_1.Patch)(':personaId/puestos/:id/interinato/dar-baja'),
    __param(0, (0, common_1.Param)('personaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "darBajaInterinato", null);
PersonaController = __decorate([
    (0, common_1.UseGuards)(jwt_1.JwtAuthGuard),
    (0, common_1.Controller)('personas'),
    __param(0, (0, common_1.Inject)(aplicacion_1.SERVICIO_FACTORY)),
    __metadata("design:paramtypes", [Object])
], PersonaController);
exports.PersonaController = PersonaController;
//# sourceMappingURL=persona.controller.js.map