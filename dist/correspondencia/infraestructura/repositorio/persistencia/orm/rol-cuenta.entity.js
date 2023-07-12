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
exports.RolCuentaEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let RolCuentaEntity = class RolCuentaEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ROL_CUENTA_ID' }),
    __metadata("design:type", Number)
], RolCuentaEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'INST_REGISTRO' }),
    __metadata("design:type", Date)
], RolCuentaEntity.prototype, "instRegistro", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'FEC_INICIO' }),
    __metadata("design:type", Date)
], RolCuentaEntity.prototype, "fecInicio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'FEC_CONCLUSION' }),
    __metadata("design:type", Date)
], RolCuentaEntity.prototype, "fecConclusion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ROL_ID' }),
    __metadata("design:type", Number)
], RolCuentaEntity.prototype, "rolId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'CUENTA_ID' }),
    __metadata("design:type", Number)
], RolCuentaEntity.prototype, "cuentaId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.RolEntity, (rol) => rol.listaRolCuenta),
    (0, typeorm_1.JoinColumn)({ name: 'ROL_ID' }),
    __metadata("design:type", _1.RolEntity)
], RolCuentaEntity.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.CuentaEntity, (cuenta) => cuenta.listaRolCuenta),
    (0, typeorm_1.JoinColumn)({ name: 'CUENTA_ID' }),
    __metadata("design:type", _1.CuentaEntity)
], RolCuentaEntity.prototype, "cuenta", void 0);
RolCuentaEntity = __decorate([
    (0, typeorm_1.Entity)('ROL_CUENTA', { schema: 'control-accesos' })
], RolCuentaEntity);
exports.RolCuentaEntity = RolCuentaEntity;
//# sourceMappingURL=rol-cuenta.entity.js.map