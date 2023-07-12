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
exports.InfoLaboral = void 0;
const classes_1 = require("@automapper/classes");
class InfoLaboral {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], InfoLaboral.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], InfoLaboral.prototype, "tipoLaboral", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], InfoLaboral.prototype, "correoInstitucional", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], InfoLaboral.prototype, "numInterno", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], InfoLaboral.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], InfoLaboral.prototype, "cuenta", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], InfoLaboral.prototype, "uniOrganizacionalId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], InfoLaboral.prototype, "puestoId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], InfoLaboral.prototype, "uniOrganizacionalNombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], InfoLaboral.prototype, "puestoNombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], InfoLaboral.prototype, "sePuedeModificar", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], InfoLaboral.prototype, "sePuedeEliminar", void 0);
exports.InfoLaboral = InfoLaboral;
//# sourceMappingURL=info-laboral.model.js.map