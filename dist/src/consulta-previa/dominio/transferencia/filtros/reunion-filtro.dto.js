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
exports.ReunionFiltroDto = void 0;
const classes_1 = require("@automapper/classes");
const class_validator_1 = require("class-validator");
const filtros_1 = require("../../../../comun/transferencia/filtros");
const notificacion_filtro_dto_1 = require("./notificacion-filtro.dto");
const class_transformer_1 = require("class-transformer");
class ReunionFiltroDto extends filtros_1.FiltroBaseDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ReunionFiltroDto.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ReunionFiltroDto.prototype, "fk_idNotificacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReunionFiltroDto.prototype, "nroReunion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ReunionFiltroDto.prototype, "conAcuerdo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ReunionFiltroDto.prototype, "sinAcuerdo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReunionFiltroDto.prototype, "motivo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ReunionFiltroDto.prototype, "reunionRealizada", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReunionFiltroDto.prototype, "actaReunionPdf", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReunionFiltroDto.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReunionFiltroDto.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [notificacion_filtro_dto_1.NotificacionFiltroDto]),
    (0, class_transformer_1.Type)(() => notificacion_filtro_dto_1.NotificacionFiltroDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], ReunionFiltroDto.prototype, "notificacion", void 0);
exports.ReunionFiltroDto = ReunionFiltroDto;
//# sourceMappingURL=reunion-filtro.dto.js.map