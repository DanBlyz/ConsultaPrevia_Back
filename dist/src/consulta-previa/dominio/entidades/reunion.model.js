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
exports.Reunion = void 0;
const classes_1 = require("@automapper/classes");
const notificacion_model_1 = require("./notificacion.model");
class Reunion {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], Reunion.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], Reunion.prototype, "fk_idNotificacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Reunion.prototype, "nroReunion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], Reunion.prototype, "conAcuerdo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], Reunion.prototype, "sinAcuerdo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Reunion.prototype, "motivo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], Reunion.prototype, "reunionRealizada", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Reunion.prototype, "actaReunionPdf", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Reunion.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Reunion.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [notificacion_model_1.Notificacion]),
    __metadata("design:type", notificacion_model_1.Notificacion)
], Reunion.prototype, "notificacion", void 0);
exports.Reunion = Reunion;
//# sourceMappingURL=reunion.model.js.map