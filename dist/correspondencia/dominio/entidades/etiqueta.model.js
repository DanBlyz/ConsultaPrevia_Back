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
exports.Etiqueta = void 0;
const classes_1 = require("@automapper/classes");
class Etiqueta {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], Etiqueta.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Etiqueta.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Etiqueta.prototype, "descripcion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Etiqueta.prototype, "usuario", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], Etiqueta.prototype, "esPublica", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], Etiqueta.prototype, "documentoId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], Etiqueta.prototype, "sePuedeModificar", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], Etiqueta.prototype, "sePuedeEliminar", void 0);
exports.Etiqueta = Etiqueta;
//# sourceMappingURL=etiqueta.model.js.map