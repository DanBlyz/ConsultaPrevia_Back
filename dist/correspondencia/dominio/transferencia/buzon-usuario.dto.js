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
exports.BuzonUsuarioModificacionDto = exports.BuzonUsuarioCreacionDto = exports.BuzonUsuarioDto = void 0;
const classes_1 = require("@automapper/classes");
const class_validator_1 = require("class-validator");
class BuzonUsuarioDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", String)
], BuzonUsuarioDto.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['TOTAL', 'RESTRINGIDO']),
    __metadata("design:type", String)
], BuzonUsuarioDto.prototype, "tipoAcceso", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BuzonUsuarioDto.prototype, "usuario", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BuzonUsuarioDto.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], BuzonUsuarioDto.prototype, "fecInicio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], BuzonUsuarioDto.prototype, "fecConclusion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['ACTIVO', 'INACTIVO']),
    __metadata("design:type", String)
], BuzonUsuarioDto.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], BuzonUsuarioDto.prototype, "buzonId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], BuzonUsuarioDto.prototype, "refPersonaId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], BuzonUsuarioDto.prototype, "sePuedeModificar", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], BuzonUsuarioDto.prototype, "sePuedeEliminar", void 0);
exports.BuzonUsuarioDto = BuzonUsuarioDto;
class BuzonUsuarioCreacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['TOTAL', 'RESTRINGIDO']),
    __metadata("design:type", String)
], BuzonUsuarioCreacionDto.prototype, "tipoAcceso", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BuzonUsuarioCreacionDto.prototype, "usuario", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BuzonUsuarioCreacionDto.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], BuzonUsuarioCreacionDto.prototype, "fecInicio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], BuzonUsuarioCreacionDto.prototype, "fecConclusion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], BuzonUsuarioCreacionDto.prototype, "buzonId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], BuzonUsuarioCreacionDto.prototype, "refPersonaId", void 0);
exports.BuzonUsuarioCreacionDto = BuzonUsuarioCreacionDto;
class BuzonUsuarioModificacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['TOTAL', 'RESTRINGIDO']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BuzonUsuarioModificacionDto.prototype, "tipoAcceso", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BuzonUsuarioModificacionDto.prototype, "usuario", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BuzonUsuarioModificacionDto.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], BuzonUsuarioModificacionDto.prototype, "fecInicio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], BuzonUsuarioModificacionDto.prototype, "fecConclusion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['ACTIVO', 'INACTIVO']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BuzonUsuarioModificacionDto.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BuzonUsuarioModificacionDto.prototype, "buzonId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BuzonUsuarioModificacionDto.prototype, "refPersonaId", void 0);
exports.BuzonUsuarioModificacionDto = BuzonUsuarioModificacionDto;
//# sourceMappingURL=buzon-usuario.dto.js.map