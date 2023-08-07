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
exports.AutenticacionController = void 0;
const common_1 = require("@nestjs/common");
const transferencia_1 = require("../../../../comun/transferencia");
const sesion_1 = require("../../../../comun/sesion");
const api_key_1 = require("../../../../comun/sesion/api-key");
const jwt_1 = require("../../../../comun/sesion/jwt");
const aplicacion_1 = require("../../../dominio/contratos/aplicacion");
const transferencia_2 = require("../../../dominio/transferencia");
let AutenticacionController = exports.AutenticacionController = class AutenticacionController {
    constructor(servicioFactory) {
        this.servicioFactory = servicioFactory;
    }
    async registrarCuenta(objetoDto) {
        const cuentaDto = {
            nombre: objetoDto.cuenta,
            contrasenia: objetoDto.contrasenia,
        };
        const usuarioDto = {
            nombre: objetoDto.nombre,
            apellido: objetoDto.apellido,
            nomPublico: objetoDto.nomPublico,
            correoElectronico: objetoDto.correoElectronico,
        };
        const roles = objetoDto.roles;
        return await this.servicioFactory.cuentaServicio.registrarse(cuentaDto, usuarioDto, roles);
    }
    async actualizarUsuario(codCuenta, objetoDto) {
        return await this.servicioFactory.usuarioServicio.modificarPorCodCuenta(codCuenta, objetoDto);
    }
    async cambiarContrasenia(codCuenta, objetoDto) {
        return await this.servicioFactory.cuentaServicio.cambiarContrasenia(codCuenta, objetoDto.contrasenia, objetoDto.nuevaContrasenia);
    }
    async obtenerPorCodigo(codigo) {
        const objetoDto = await this.servicioFactory.usuarioServicio.obtenerPorCodCuenta(codigo);
        if (objetoDto) {
            delete objetoDto.id;
        }
        return await new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, '', objetoDto);
    }
    async obtenerToken(objetoDto) {
        const identidad = sesion_1.Identidad.getInstance();
        identidad.usuarioId = 0;
        identidad.cuenta = 'AUTENTICACION';
        identidad.roles = null;
        return await this.servicioFactory.cuentaServicio.obtenerToken(objetoDto);
    }
    async obtenerTokenLdap(objetoDto) {
        return await this.servicioFactory.ldapServicio.obtenerToken(objetoDto);
    }
};
__decorate([
    (0, common_1.Post)('usuarios'),
    (0, common_1.UseGuards)(api_key_1.ApiKeyAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AutenticacionController.prototype, "registrarCuenta", null);
__decorate([
    (0, common_1.Patch)('usuarios/:codCuenta'),
    (0, common_1.UseGuards)(api_key_1.ApiKeyAuthGuard),
    __param(0, (0, common_1.Param)('codCuenta')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, transferencia_2.UsuarioModificacionDto]),
    __metadata("design:returntype", Promise)
], AutenticacionController.prototype, "actualizarUsuario", null);
__decorate([
    (0, common_1.Patch)('usuarios/:codCuenta/cambiar-contrasenia'),
    (0, common_1.UseGuards)(api_key_1.ApiKeyAuthGuard),
    __param(0, (0, common_1.Param)('codCuenta')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AutenticacionController.prototype, "cambiarContrasenia", null);
__decorate([
    (0, common_1.Get)('usuarios/:codigo'),
    (0, common_1.UseGuards)(jwt_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('codigo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AutenticacionController.prototype, "obtenerPorCodigo", null);
__decorate([
    (0, common_1.Post)('token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transferencia_2.AutenticacionDto]),
    __metadata("design:returntype", Promise)
], AutenticacionController.prototype, "obtenerToken", null);
__decorate([
    (0, common_1.Post)('ldap/token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transferencia_2.AutenticacionDto]),
    __metadata("design:returntype", Promise)
], AutenticacionController.prototype, "obtenerTokenLdap", null);
exports.AutenticacionController = AutenticacionController = __decorate([
    (0, common_1.Controller)('autenticacion'),
    __param(0, (0, common_1.Inject)(aplicacion_1.SERVICIO_FACTORY)),
    __metadata("design:paramtypes", [Object])
], AutenticacionController);
//# sourceMappingURL=autenticacion.controller.js.map