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
exports.ViajeModificacionDto = exports.ViajeCreacionDto = exports.ViajeDto = void 0;
const classes_1 = require("@automapper/classes");
const class_validator_1 = require("class-validator");
class ViajeDto {
}
exports.ViajeDto = ViajeDto;
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], ViajeDto.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], ViajeDto.prototype, "fk_idActos", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], ViajeDto.prototype, "fechaInicio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], ViajeDto.prototype, "fechaFin", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ViajeDto.prototype, "descripcion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ViajeDto.prototype, "nroFormulario", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ViajeDto.prototype, "formularioPdf", void 0);
class ViajeCreacionDto {
}
exports.ViajeCreacionDto = ViajeCreacionDto;
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], ViajeCreacionDto.prototype, "fk_idActos", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], ViajeCreacionDto.prototype, "fechaInicio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], ViajeCreacionDto.prototype, "fechaFin", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ViajeCreacionDto.prototype, "descripcion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ViajeCreacionDto.prototype, "nroFormulario", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ViajeCreacionDto.prototype, "formularioPdf", void 0);
class ViajeModificacionDto {
}
exports.ViajeModificacionDto = ViajeModificacionDto;
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], ViajeModificacionDto.prototype, "fechaInicio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], ViajeModificacionDto.prototype, "fechaFin", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ViajeModificacionDto.prototype, "descripcion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ViajeModificacionDto.prototype, "nroFormulario", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ViajeModificacionDto.prototype, "formularioPdf", void 0);
//# sourceMappingURL=viaje.dto.js.map