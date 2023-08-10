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
exports.TramiteFiltroDto = void 0;
const classes_1 = require("@automapper/classes");
const class_validator_1 = require("class-validator");
const filtros_1 = require("../../../../comun/transferencia/filtros");
class TramiteFiltroDto extends filtros_1.FiltroBaseDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], TramiteFiltroDto.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteFiltroDto.prototype, "correlativo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], TramiteFiltroDto.prototype, "codigoUnico", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteFiltroDto.prototype, "areaMinera", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteFiltroDto.prototype, "clasificacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], TramiteFiltroDto.prototype, "nroCuadricula", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteFiltroDto.prototype, "departamento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteFiltroDto.prototype, "provincia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteFiltroDto.prototype, "municipio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteFiltroDto.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteFiltroDto.prototype, "estadoAccion", void 0);
exports.TramiteFiltroDto = TramiteFiltroDto;
//# sourceMappingURL=tramite-filtro.dto.js.map