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
exports.NotificacionEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const tramite_entity_1 = require("./tramite.entity");
const reunion_entity_1 = require("./reunion.entity");
let NotificacionEntity = class NotificacionEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idnotificacion' }),
    __metadata("design:type", Number)
], NotificacionEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'fk_idtramite' }),
    __metadata("design:type", Number)
], NotificacionEntity.prototype, "fk_idTramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'notificado' }),
    __metadata("design:type", String)
], NotificacionEntity.prototype, "notificado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'direcciondpto' }),
    __metadata("design:type", String)
], NotificacionEntity.prototype, "direccionDpto", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'notificacionpdf' }),
    __metadata("design:type", String)
], NotificacionEntity.prototype, "notificacionPdf", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'flujo' }),
    __metadata("design:type", String)
], NotificacionEntity.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'representanteminero' }),
    __metadata("design:type", Boolean)
], NotificacionEntity.prototype, "representanteMinero", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'representantecomunidad' }),
    __metadata("design:type", Boolean)
], NotificacionEntity.prototype, "representanteComunidad", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'sifde' }),
    __metadata("design:type", Boolean)
], NotificacionEntity.prototype, "sifde", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'comunidad' }),
    __metadata("design:type", String)
], NotificacionEntity.prototype, "comunidad", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [reunion_entity_1.ReunionEntity]),
    (0, typeorm_1.OneToOne)(() => reunion_entity_1.ReunionEntity, (reunion) => reunion.notificacion),
    __metadata("design:type", reunion_entity_1.ReunionEntity)
], NotificacionEntity.prototype, "reunion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tramite_entity_1.TramiteEntity, (tramite) => tramite.listaNotificacion),
    (0, typeorm_1.JoinColumn)({ name: 'fk_idtramite' }),
    __metadata("design:type", tramite_entity_1.TramiteEntity)
], NotificacionEntity.prototype, "tramite", void 0);
NotificacionEntity = __decorate([
    (0, typeorm_1.Entity)('notificacion', { schema: 'consulta-previa' })
], NotificacionEntity);
exports.NotificacionEntity = NotificacionEntity;
//# sourceMappingURL=notificacion.entity.js.map