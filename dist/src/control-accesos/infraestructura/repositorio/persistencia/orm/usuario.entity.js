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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let UsuarioEntity = exports.UsuarioEntity = class UsuarioEntity extends auditoria_entity_1.AuditoriaEntity {
    get codCuenta() {
        return this.cuenta.codigo;
    }
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryColumn)({ name: 'CUENTA_ID' }),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NOMBRE' }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'APELLIDO' }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "apellido", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NOM_PUBLICO' }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nomPublico", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'CORREO_ELECTRONICO' }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "correoElectronico", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => _1.CuentaEntity, (usuario) => usuario.usuario),
    (0, typeorm_1.JoinColumn)({ name: 'CUENTA_ID' }),
    __metadata("design:type", _1.CuentaEntity)
], UsuarioEntity.prototype, "cuenta", void 0);
exports.UsuarioEntity = UsuarioEntity = __decorate([
    (0, typeorm_1.Entity)('USUARIO', { schema: 'control-accesos' })
], UsuarioEntity);
//# sourceMappingURL=usuario.entity.js.map