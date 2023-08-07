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
exports.ActoAdministrativo = void 0;
const classes_1 = require("@automapper/classes");
const tramite_model_1 = require("./tramite.model");
const pago_cpt_model_1 = require("./pago-cpt.model");
const viaje_model_1 = require("./viaje.model");
const resolucion_model_1 = require("./resolucion.model");
class ActoAdministrativo {
}
exports.ActoAdministrativo = ActoAdministrativo;
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], ActoAdministrativo.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], ActoAdministrativo.prototype, "fk_idTramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], ActoAdministrativo.prototype, "fk_idResolucion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], ActoAdministrativo.prototype, "viajeRealizado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], ActoAdministrativo.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], ActoAdministrativo.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [tramite_model_1.Tramite]),
    __metadata("design:type", tramite_model_1.Tramite)
], ActoAdministrativo.prototype, "tramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [resolucion_model_1.Resolucion]),
    __metadata("design:type", resolucion_model_1.Resolucion)
], ActoAdministrativo.prototype, "resolucion", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [pago_cpt_model_1.PagoCpt]),
    __metadata("design:type", pago_cpt_model_1.PagoCpt)
], ActoAdministrativo.prototype, "pagoCpt", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [viaje_model_1.Viaje]),
    __metadata("design:type", viaje_model_1.Viaje)
], ActoAdministrativo.prototype, "viaje", void 0);
//# sourceMappingURL=actos-administrativos.model.js.map