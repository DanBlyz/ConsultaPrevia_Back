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
exports.ParametroEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
let ParametroEntity = class ParametroEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'PARAM_ID' }),
    __metadata("design:type", Number)
], ParametroEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TIPO' }),
    __metadata("design:type", String)
], ParametroEntity.prototype, "tipo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ORDEN' }),
    __metadata("design:type", Number)
], ParametroEntity.prototype, "orden", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'VALOR' }),
    __metadata("design:type", String)
], ParametroEntity.prototype, "valor", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TEXTO' }),
    __metadata("design:type", String)
], ParametroEntity.prototype, "texto", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ESTA_ACTIVO' }),
    __metadata("design:type", Boolean)
], ParametroEntity.prototype, "estaActivo", void 0);
ParametroEntity = __decorate([
    (0, typeorm_1.Entity)('PARAMETRO', { schema: 'personal' })
], ParametroEntity);
exports.ParametroEntity = ParametroEntity;
//# sourceMappingURL=parametro.entity.js.map