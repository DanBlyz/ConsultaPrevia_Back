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
exports.SERVICIO_FACTORY_PROVIDER = exports.ServicioFactory = void 0;
const common_1 = require("@nestjs/common");
const aplicacion_1 = require("../../dominio/contratos/aplicacion");
const servicios_1 = require("../../dominio/contratos/aplicacion/servicios");
let ServicioFactory = class ServicioFactory {
    constructor(cuentaServicio, grupoServicio, ldapServicio, rolCuentaServicio, rolServicio, usuarioServicio) {
        this.cuentaServicio = cuentaServicio;
        this.grupoServicio = grupoServicio;
        this.ldapServicio = ldapServicio;
        this.rolCuentaServicio = rolCuentaServicio;
        this.rolServicio = rolServicio;
        this.usuarioServicio = usuarioServicio;
    }
};
ServicioFactory = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(servicios_1.CUENTA_SERVICIO)),
    __param(1, (0, common_1.Inject)(servicios_1.GRUPO_SERVICIO)),
    __param(2, (0, common_1.Inject)(servicios_1.LDAP_SERVICIO)),
    __param(3, (0, common_1.Inject)(servicios_1.ROL_CUENTA_SERVICIO)),
    __param(4, (0, common_1.Inject)(servicios_1.ROL_SERVICIO)),
    __param(5, (0, common_1.Inject)(servicios_1.USUARIO_SERVICIO)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object])
], ServicioFactory);
exports.ServicioFactory = ServicioFactory;
exports.SERVICIO_FACTORY_PROVIDER = {
    provide: aplicacion_1.SERVICIO_FACTORY,
    useClass: ServicioFactory,
};
//# sourceMappingURL=servicio.factory.js.map