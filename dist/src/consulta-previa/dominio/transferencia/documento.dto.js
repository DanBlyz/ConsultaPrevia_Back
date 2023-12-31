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
exports.DocumentoModificacionDto = exports.DocumentoCreacionDto = exports.DocumentoDto = void 0;
const classes_1 = require("@automapper/classes");
const class_validator_1 = require("class-validator");
const tramite_dto_1 = require("./tramite.dto");
const class_transformer_1 = require("class-transformer");
const sujeto_identificado_dto_1 = require("./sujeto-identificado.dto");
class DocumentoDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], DocumentoDto.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], DocumentoDto.prototype, "fk_idTramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "correlativo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "referencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "documentoPdf", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "tipoDocumento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [tramite_dto_1.TramiteDto]),
    (0, class_transformer_1.Type)(() => tramite_dto_1.TramiteDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], DocumentoDto.prototype, "tramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [sujeto_identificado_dto_1.SujetoIdentificadoDto]),
    (0, class_validator_1.IsArray)({ each: true }),
    (0, class_transformer_1.Type)(() => sujeto_identificado_dto_1.SujetoIdentificadoDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], DocumentoDto.prototype, "listaSujetoIdentificado", void 0);
exports.DocumentoDto = DocumentoDto;
class DocumentoCreacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], DocumentoCreacionDto.prototype, "fk_idTramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoCreacionDto.prototype, "correlativo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoCreacionDto.prototype, "referencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoCreacionDto.prototype, "documentoPdf", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoCreacionDto.prototype, "tipoDocumento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoCreacionDto.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DocumentoCreacionDto.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsArray)({ each: true }),
    (0, class_transformer_1.Type)(() => sujeto_identificado_dto_1.SujetoIdentificadoDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], DocumentoCreacionDto.prototype, "listaSujetoIdentificado", void 0);
exports.DocumentoCreacionDto = DocumentoCreacionDto;
class DocumentoModificacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DocumentoModificacionDto.prototype, "correlativo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DocumentoModificacionDto.prototype, "referencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DocumentoModificacionDto.prototype, "documentoPdf", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DocumentoModificacionDto.prototype, "tipoDocumento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DocumentoModificacionDto.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DocumentoModificacionDto.prototype, "estado", void 0);
exports.DocumentoModificacionDto = DocumentoModificacionDto;
//# sourceMappingURL=documento.dto.js.map