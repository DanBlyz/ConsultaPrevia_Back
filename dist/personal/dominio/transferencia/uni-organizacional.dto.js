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
exports.UniOrganizacionalModificacionDto = exports.UniOrganizacionalCreacionDto = exports.UniOrganizacionalDto = void 0;
const classes_1 = require("@automapper/classes");
const class_validator_1 = require("class-validator");
class UniOrganizacionalDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], UniOrganizacionalDto.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UniOrganizacionalDto.prototype, "codigo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UniOrganizacionalDto.prototype, "sigla", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UniOrganizacionalDto.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UniOrganizacionalDto.prototype, "estaActiva", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UniOrganizacionalDto.prototype, "uniOrganizacionalSuperiorId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UniOrganizacionalDto.prototype, "uniOrganizacionalSuperiorNombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], UniOrganizacionalDto.prototype, "numPuestos", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UniOrganizacionalDto.prototype, "sePuedeModificar", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UniOrganizacionalDto.prototype, "sePuedeEliminar", void 0);
exports.UniOrganizacionalDto = UniOrganizacionalDto;
class UniOrganizacionalCreacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UniOrganizacionalCreacionDto.prototype, "codigo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UniOrganizacionalCreacionDto.prototype, "sigla", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UniOrganizacionalCreacionDto.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UniOrganizacionalCreacionDto.prototype, "estaActiva", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UniOrganizacionalCreacionDto.prototype, "uniOrganizacionalSuperiorId", void 0);
exports.UniOrganizacionalCreacionDto = UniOrganizacionalCreacionDto;
class UniOrganizacionalModificacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UniOrganizacionalModificacionDto.prototype, "codigo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UniOrganizacionalModificacionDto.prototype, "sigla", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UniOrganizacionalModificacionDto.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UniOrganizacionalModificacionDto.prototype, "estaActiva", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UniOrganizacionalModificacionDto.prototype, "uniOrganizacionalSuperiorId", void 0);
exports.UniOrganizacionalModificacionDto = UniOrganizacionalModificacionDto;
//# sourceMappingURL=uni-organizacional.dto.js.map