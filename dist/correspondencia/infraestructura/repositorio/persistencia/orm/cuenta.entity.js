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
exports.CuentaEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let CuentaEntity = class CuentaEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'CUENTA_ID' }),
    __metadata("design:type", Number)
], CuentaEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'CODIGO' }),
    __metadata("design:type", String)
], CuentaEntity.prototype, "codigo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'MODO_AUTENTICACION' }),
    __metadata("design:type", String)
], CuentaEntity.prototype, "modoAutenticacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NOMBRE' }),
    __metadata("design:type", String)
], CuentaEntity.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'CONTRASENIA' }),
    __metadata("design:type", String)
], CuentaEntity.prototype, "contrasenia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ESTA_AUTORIZADA' }),
    __metadata("design:type", Boolean)
], CuentaEntity.prototype, "estaAutorizada", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'INST_ULT_SESION', nullable: true }),
    __metadata("design:type", Date)
], CuentaEntity.prototype, "instUltSesion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NUM_INT_FALLIDOS' }),
    __metadata("design:type", Number)
], CuentaEntity.prototype, "numIntFallidos", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ESTA_BLOQUEADA' }),
    __metadata("design:type", Boolean)
], CuentaEntity.prototype, "estaBloqueada", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'INST_ULT_BLOQUEO', nullable: true }),
    __metadata("design:type", Date)
], CuentaEntity.prototype, "instUltBloqueo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => _1.UsuarioEntity, (usuario) => usuario.cuenta),
    (0, typeorm_1.JoinColumn)({ name: 'CUENTA_ID' }),
    __metadata("design:type", _1.UsuarioEntity)
], CuentaEntity.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.RolCuentaEntity, (rolCuenta) => rolCuenta.cuenta),
    (0, typeorm_1.JoinColumn)({ name: 'CUENTA_ID' }),
    __metadata("design:type", Array)
], CuentaEntity.prototype, "listaRolCuenta", void 0);
CuentaEntity = __decorate([
    (0, typeorm_1.Entity)('CUENTA', { schema: 'control-accesos' })
], CuentaEntity);
exports.CuentaEntity = CuentaEntity;
//# sourceMappingURL=cuenta.entity.js.map