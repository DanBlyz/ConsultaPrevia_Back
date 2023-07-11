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
exports.RolCuenta = void 0;
const classes_1 = require("@automapper/classes");
const _1 = require(".");
class RolCuenta {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], RolCuenta.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], RolCuenta.prototype, "instRegistro", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], RolCuenta.prototype, "fecInicio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], RolCuenta.prototype, "fecConclusion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], RolCuenta.prototype, "rolId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], RolCuenta.prototype, "cuentaId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", _1.Rol)
], RolCuenta.prototype, "rol", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", _1.Cuenta)
], RolCuenta.prototype, "cuenta", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], RolCuenta.prototype, "rolNombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], RolCuenta.prototype, "rolGrupoCodigo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], RolCuenta.prototype, "rolGrupoNombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], RolCuenta.prototype, "sePuedeModificar", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], RolCuenta.prototype, "sePuedeEliminar", void 0);
exports.RolCuenta = RolCuenta;
//# sourceMappingURL=rol-cuenta.model.js.map