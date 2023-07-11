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
exports.AuditoriaEntity = void 0;
const typeorm_1 = require("typeorm");
class AuditoriaEntity {
}
__decorate([
    (0, typeorm_1.Column)({ name: '_USU_CREADOR' }),
    __metadata("design:type", String)
], AuditoriaEntity.prototype, "_usuCreador", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '_INST_CREACION' }),
    __metadata("design:type", Date)
], AuditoriaEntity.prototype, "_instCreacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '_USU_MODIFICACION', nullable: true }),
    __metadata("design:type", String)
], AuditoriaEntity.prototype, "_usuModificacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '_INST_MODIFICACION', nullable: true }),
    __metadata("design:type", Date)
], AuditoriaEntity.prototype, "_instModificacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '_USU_ELIMINACION', nullable: true }),
    __metadata("design:type", String)
], AuditoriaEntity.prototype, "_usuEliminacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: '_INST_ELIMINACION', nullable: true }),
    __metadata("design:type", Date)
], AuditoriaEntity.prototype, "_instEliminacion", void 0);
exports.AuditoriaEntity = AuditoriaEntity;
//# sourceMappingURL=auditoria.entity.js.map