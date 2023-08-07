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
exports.PagoCptModificacionDto = exports.PagoCptCreacionDto = exports.PagoCptDto = void 0;
const classes_1 = require("@automapper/classes");
const class_validator_1 = require("class-validator");
class PagoCptDto {
}
exports.PagoCptDto = PagoCptDto;
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], PagoCptDto.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], PagoCptDto.prototype, "fk_idActos", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PagoCptDto.prototype, "pagoRealizado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PagoCptDto.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PagoCptDto.prototype, "diasViaje", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PagoCptDto.prototype, "tipoViaje", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PagoCptDto.prototype, "montoTotal", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PagoCptDto.prototype, "apm", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PagoCptDto.prototype, "descripcion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PagoCptDto.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PagoCptDto.prototype, "transaccion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], PagoCptDto.prototype, "fechaActual", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PagoCptDto.prototype, "canal", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PagoCptDto.prototype, "cpt", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], PagoCptDto.prototype, "fechaVigencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], PagoCptDto.prototype, "fechaValidez", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], PagoCptDto.prototype, "inicioVigencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PagoCptDto.prototype, "tipoServicio", void 0);
class PagoCptCreacionDto {
}
exports.PagoCptCreacionDto = PagoCptCreacionDto;
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], PagoCptCreacionDto.prototype, "fk_idActos", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PagoCptCreacionDto.prototype, "pagoRealizado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PagoCptCreacionDto.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PagoCptCreacionDto.prototype, "diasViaje", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PagoCptCreacionDto.prototype, "tipoViaje", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PagoCptCreacionDto.prototype, "montoTotal", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PagoCptCreacionDto.prototype, "apm", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PagoCptCreacionDto.prototype, "descripcion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['EN PROCESO', 'PAGADO']),
    __metadata("design:type", String)
], PagoCptCreacionDto.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PagoCptCreacionDto.prototype, "transaccion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], PagoCptCreacionDto.prototype, "fechaActual", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['UNINET', 'BANCO']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PagoCptCreacionDto.prototype, "canal", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PagoCptCreacionDto.prototype, "cpt", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], PagoCptCreacionDto.prototype, "fechaVigencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], PagoCptCreacionDto.prototype, "fechaValidez", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], PagoCptCreacionDto.prototype, "inicioVigencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PagoCptCreacionDto.prototype, "tipoServicio", void 0);
class PagoCptModificacionDto {
}
exports.PagoCptModificacionDto = PagoCptModificacionDto;
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], PagoCptModificacionDto.prototype, "pagoRealizado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PagoCptModificacionDto.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PagoCptModificacionDto.prototype, "diasViaje", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PagoCptModificacionDto.prototype, "tipoViaje", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PagoCptModificacionDto.prototype, "montoTotal", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PagoCptModificacionDto.prototype, "apm", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PagoCptModificacionDto.prototype, "descripcion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PagoCptModificacionDto.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PagoCptModificacionDto.prototype, "transaccion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], PagoCptModificacionDto.prototype, "fechaActual", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PagoCptModificacionDto.prototype, "canal", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PagoCptModificacionDto.prototype, "cpt", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], PagoCptModificacionDto.prototype, "fechaVigencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], PagoCptModificacionDto.prototype, "fechaValidez", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], PagoCptModificacionDto.prototype, "inicioVigencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PagoCptModificacionDto.prototype, "tipoServicio", void 0);
//# sourceMappingURL=pago-cpt.dto.js.map