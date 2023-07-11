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
exports.RolCuentaModificacionDto = exports.RolCuentaCreacionDto = exports.RolCuentaDto = void 0;
const classes_1 = require("@automapper/classes");
const class_validator_1 = require("class-validator");
const _1 = require(".");
class RolCuentaDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], RolCuentaDto.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], RolCuentaDto.prototype, "instRegistro", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], RolCuentaDto.prototype, "fecInicio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], RolCuentaDto.prototype, "fecConclusion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], RolCuentaDto.prototype, "rolId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], RolCuentaDto.prototype, "cuentaId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", _1.RolDto)
], RolCuentaDto.prototype, "rol", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", _1.CuentaDto)
], RolCuentaDto.prototype, "cuenta", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RolCuentaDto.prototype, "rolNombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RolCuentaDto.prototype, "rolGrupoCodigo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RolCuentaDto.prototype, "rolGrupoNombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RolCuentaDto.prototype, "sePuedeModificar", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RolCuentaDto.prototype, "sePuedeEliminar", void 0);
exports.RolCuentaDto = RolCuentaDto;
class RolCuentaCreacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], RolCuentaCreacionDto.prototype, "fecInicio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], RolCuentaCreacionDto.prototype, "fecConclusion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], RolCuentaCreacionDto.prototype, "rolId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], RolCuentaCreacionDto.prototype, "cuentaId", void 0);
exports.RolCuentaCreacionDto = RolCuentaCreacionDto;
class RolCuentaModificacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], RolCuentaModificacionDto.prototype, "fecInicio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], RolCuentaModificacionDto.prototype, "fecConclusion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], RolCuentaModificacionDto.prototype, "rolId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], RolCuentaModificacionDto.prototype, "cuentaId", void 0);
exports.RolCuentaModificacionDto = RolCuentaModificacionDto;
//# sourceMappingURL=rol-cuenta.dto.js.map