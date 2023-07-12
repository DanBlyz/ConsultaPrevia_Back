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
exports.SujetoIdentificadoModificacionDto = exports.SujetoIdentificadoCreacionDto = exports.SujetoIdentificadoDto = void 0;
const classes_1 = require("@automapper/classes");
const class_validator_1 = require("class-validator");
class SujetoIdentificadoDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], SujetoIdentificadoDto.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SujetoIdentificadoDto.prototype, "fk_idInforme", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SujetoIdentificadoDto.prototype, "comunidad", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SujetoIdentificadoDto.prototype, "representante", void 0);
exports.SujetoIdentificadoDto = SujetoIdentificadoDto;
class SujetoIdentificadoCreacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SujetoIdentificadoCreacionDto.prototype, "fk_idInforme", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SujetoIdentificadoCreacionDto.prototype, "comunidad", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SujetoIdentificadoCreacionDto.prototype, "representante", void 0);
exports.SujetoIdentificadoCreacionDto = SujetoIdentificadoCreacionDto;
class SujetoIdentificadoModificacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SujetoIdentificadoModificacionDto.prototype, "comunidad", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SujetoIdentificadoModificacionDto.prototype, "representante", void 0);
exports.SujetoIdentificadoModificacionDto = SujetoIdentificadoModificacionDto;
//# sourceMappingURL=sujeto-identificado.dto.js.map