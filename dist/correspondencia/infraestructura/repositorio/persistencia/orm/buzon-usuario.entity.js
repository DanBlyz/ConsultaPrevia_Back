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
exports.BuzonUsuarioEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let BuzonUsuarioEntity = class BuzonUsuarioEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'BUZON_USU_ID' }),
    __metadata("design:type", Number)
], BuzonUsuarioEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TIPO_ACCESO' }),
    __metadata("design:type", String)
], BuzonUsuarioEntity.prototype, "tipoAcceso", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'USUARIO' }),
    __metadata("design:type", String)
], BuzonUsuarioEntity.prototype, "usuario", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NOMBRE' }),
    __metadata("design:type", String)
], BuzonUsuarioEntity.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'FEC_INICIO' }),
    __metadata("design:type", Date)
], BuzonUsuarioEntity.prototype, "fecInicio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'FEC_CONCLUSION' }),
    __metadata("design:type", Date)
], BuzonUsuarioEntity.prototype, "fecConclusion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ESTADO' }),
    __metadata("design:type", String)
], BuzonUsuarioEntity.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'BUZON_ID' }),
    __metadata("design:type", Number)
], BuzonUsuarioEntity.prototype, "buzonId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'REF_PERSONA_ID' }),
    __metadata("design:type", Number)
], BuzonUsuarioEntity.prototype, "refPersonaId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.BuzonEntity, (buzon) => buzon.listaBuzonUsuario),
    (0, typeorm_1.JoinColumn)({ name: 'BUZON_ID' }),
    __metadata("design:type", _1.BuzonEntity)
], BuzonUsuarioEntity.prototype, "buzon", void 0);
BuzonUsuarioEntity = __decorate([
    (0, typeorm_1.Entity)('BUZON_USUARIO', { schema: 'correspondencia' })
], BuzonUsuarioEntity);
exports.BuzonUsuarioEntity = BuzonUsuarioEntity;
//# sourceMappingURL=buzon-usuario.entity.js.map