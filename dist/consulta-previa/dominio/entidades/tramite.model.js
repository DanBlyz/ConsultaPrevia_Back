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
exports.Tramite = void 0;
const classes_1 = require("@automapper/classes");
const resolucion_model_1 = require("./resolucion.model");
const providencia_model_1 = require("./providencia.model");
const informe_model_1 = require("./informe.model");
const notificacion_model_1 = require("./notificacion.model");
const actos_administrativos_model_1 = require("./actos-administrativos.model");
class Tramite {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], Tramite.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Tramite.prototype, "correlativo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], Tramite.prototype, "codigoUnico", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Tramite.prototype, "areaMinera", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Tramite.prototype, "clasificacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], Tramite.prototype, "nroCuadricula", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Tramite.prototype, "departamento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Tramite.prototype, "provincia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Tramite.prototype, "municipio", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [resolucion_model_1.Resolucion]),
    __metadata("design:type", Array)
], Tramite.prototype, "listaResolucion", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [providencia_model_1.Providencia]),
    __metadata("design:type", Array)
], Tramite.prototype, "listaProvidencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [informe_model_1.Informe]),
    __metadata("design:type", Array)
], Tramite.prototype, "listaInforme", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [notificacion_model_1.Notificacion]),
    __metadata("design:type", Array)
], Tramite.prototype, "listaNotificacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [actos_administrativos_model_1.ActoAdministrativo]),
    __metadata("design:type", Array)
], Tramite.prototype, "listaActoAdministrativo", void 0);
exports.Tramite = Tramite;
//# sourceMappingURL=tramite.model.js.map