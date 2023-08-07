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
exports.LdapController = void 0;
const common_1 = require("@nestjs/common");
const aplicacion_1 = require("../../../dominio/contratos/aplicacion");
let LdapController = exports.LdapController = class LdapController {
    constructor(servicioFactory) {
        this.servicioFactory = servicioFactory;
    }
    async obtenerPorUid(uid) {
        const objetoDto = await this.servicioFactory.ldapServicio.obtenerPorUid(uid);
        if (objetoDto) {
            return 'Esta conectado';
        }
        else {
            return 'No esta conetado';
        }
    }
};
__decorate([
    (0, common_1.Get)(':uid'),
    __param(0, (0, common_1.Param)('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LdapController.prototype, "obtenerPorUid", null);
exports.LdapController = LdapController = __decorate([
    (0, common_1.Controller)('ldap'),
    __param(0, (0, common_1.Inject)(aplicacion_1.SERVICIO_FACTORY)),
    __metadata("design:paramtypes", [Object])
], LdapController);
//# sourceMappingURL=ldap.controller.js.map