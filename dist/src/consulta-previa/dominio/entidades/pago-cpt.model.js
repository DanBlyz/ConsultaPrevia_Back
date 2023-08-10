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
exports.PagoCpt = void 0;
const classes_1 = require("@automapper/classes");
class PagoCpt {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], PagoCpt.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], PagoCpt.prototype, "fk_idActos", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], PagoCpt.prototype, "pagoRealizado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PagoCpt.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], PagoCpt.prototype, "diasViaje", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PagoCpt.prototype, "tipoViaje", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], PagoCpt.prototype, "montoTotal", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PagoCpt.prototype, "apm", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PagoCpt.prototype, "descripcion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PagoCpt.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], PagoCpt.prototype, "transaccion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], PagoCpt.prototype, "fechaActual", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PagoCpt.prototype, "canal", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], PagoCpt.prototype, "cpt", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], PagoCpt.prototype, "fechaVigencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], PagoCpt.prototype, "fechaValidez", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], PagoCpt.prototype, "inicioVigencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PagoCpt.prototype, "tipoServicio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PagoCpt.prototype, "cptPdf", void 0);
exports.PagoCpt = PagoCpt;
//# sourceMappingURL=pago-cpt.model.js.map