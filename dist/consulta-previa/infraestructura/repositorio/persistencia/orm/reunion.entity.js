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
exports.ReunionEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const notificacion_entity_1 = require("./notificacion.entity");
let ReunionEntity = class ReunionEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idreunion' }),
    __metadata("design:type", Number)
], ReunionEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'fk_idnotificacion' }),
    __metadata("design:type", Number)
], ReunionEntity.prototype, "fk_idNotificacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'nroreunion' }),
    __metadata("design:type", String)
], ReunionEntity.prototype, "nroReunion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'acuerdo', default: false }),
    __metadata("design:type", Boolean)
], ReunionEntity.prototype, "acuerdo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'motivo' }),
    __metadata("design:type", String)
], ReunionEntity.prototype, "motivo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'reunionrealizada', default: false }),
    __metadata("design:type", Boolean)
], ReunionEntity.prototype, "reunionRealizada", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'actareunionpdf' }),
    __metadata("design:type", String)
], ReunionEntity.prototype, "actaReunionPdf", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'encargado' }),
    __metadata("design:type", String)
], ReunionEntity.prototype, "encargado", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => notificacion_entity_1.NotificacionEntity, (notificacion) => notificacion.reunion),
    (0, typeorm_1.JoinColumn)({ name: 'fk_idnotificacion' }),
    __metadata("design:type", notificacion_entity_1.NotificacionEntity)
], ReunionEntity.prototype, "notificacion", void 0);
ReunionEntity = __decorate([
    (0, typeorm_1.Entity)('reunion', { schema: 'consulta-previa' })
], ReunionEntity);
exports.ReunionEntity = ReunionEntity;
//# sourceMappingURL=reunion.entity.js.map