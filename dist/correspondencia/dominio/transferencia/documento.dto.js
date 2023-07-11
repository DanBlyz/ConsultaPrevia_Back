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
const participante_dto_1 = require("./participante.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class DocumentoDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "numero", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "gestion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "cite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "citeExterno", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], DocumentoDto.prototype, "instRegistro", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], DocumentoDto.prototype, "fecha", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "referencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], DocumentoDto.prototype, "numHojas", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "prioridad", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "observacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], DocumentoDto.prototype, "esBorrador", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], DocumentoDto.prototype, "estaImpreso", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], DocumentoDto.prototype, "hojaRutaId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], DocumentoDto.prototype, "tipoDocumentoId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], DocumentoDto.prototype, "clasificacionId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "hojaRutaNumero", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "tipoDocumentoNombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "clasificacionNombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [participante_dto_1.ParticipanteDto]),
    (0, class_validator_1.IsArray)({ each: true }),
    (0, class_transformer_1.Type)(() => participante_dto_1.ParticipanteDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], DocumentoDto.prototype, "listaParticipante", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DocumentoDto.prototype, "entidadSigla", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DocumentoDto.prototype, "uinOrganizacionalId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], DocumentoDto.prototype, "sePuedeModificar", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], DocumentoDto.prototype, "sePuedeEliminar", void 0);
exports.DocumentoDto = DocumentoDto;
class DocumentoCreacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoCreacionDto.prototype, "citeExterno", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], DocumentoCreacionDto.prototype, "fecha", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoCreacionDto.prototype, "referencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], DocumentoCreacionDto.prototype, "numHojas", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['NORMAL', 'URGENTE']),
    __metadata("design:type", String)
], DocumentoCreacionDto.prototype, "prioridad", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DocumentoCreacionDto.prototype, "observacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], DocumentoCreacionDto.prototype, "hojaRutaId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], DocumentoCreacionDto.prototype, "tipoDocumentoId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], DocumentoCreacionDto.prototype, "clasificacionId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsArray)({ each: true }),
    (0, class_transformer_1.Type)(() => participante_dto_1.ParticipanteDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], DocumentoCreacionDto.prototype, "listaParticipante", void 0);
exports.DocumentoCreacionDto = DocumentoCreacionDto;
class DocumentoModificacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DocumentoModificacionDto.prototype, "citeExterno", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], DocumentoModificacionDto.prototype, "fecha", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DocumentoModificacionDto.prototype, "referencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DocumentoModificacionDto.prototype, "numHojas", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DocumentoModificacionDto.prototype, "prioridad", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DocumentoModificacionDto.prototype, "observacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], DocumentoModificacionDto.prototype, "esBorrador", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], DocumentoModificacionDto.prototype, "estaImpreso", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DocumentoModificacionDto.prototype, "hojaRutaId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DocumentoModificacionDto.prototype, "tipoDocumentoId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DocumentoModificacionDto.prototype, "clasificacionId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsArray)({ each: true }),
    (0, class_transformer_1.Type)(() => participante_dto_1.ParticipanteDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], DocumentoModificacionDto.prototype, "listaParticipante", void 0);
exports.DocumentoModificacionDto = DocumentoModificacionDto;
//# sourceMappingURL=documento.dto.js.map