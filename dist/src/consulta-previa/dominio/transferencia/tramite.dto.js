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
exports.TramiteModificacionDto = exports.TramiteCreacionDto = exports.TramiteDto = void 0;
const classes_1 = require("@automapper/classes");
const class_validator_1 = require("class-validator");
const resolucion_dto_1 = require("./resolucion.dto");
const class_transformer_1 = require("class-transformer");
const providencia_dto_1 = require("./providencia.dto");
const informe_dto_1 = require("./informe.dto");
const notificacion_dto_1 = require("./notificacion.dto");
const actos_administrativos_dto_1 = require("./actos-administrativos.dto");
class TramiteDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], TramiteDto.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteDto.prototype, "correlativo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TramiteDto.prototype, "codigoUnico", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteDto.prototype, "areaMinera", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteDto.prototype, "clasificacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TramiteDto.prototype, "nroCuadricula", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteDto.prototype, "departamento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteDto.prototype, "provincia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteDto.prototype, "municipio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteDto.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteDto.prototype, "estadoAccion", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [resolucion_dto_1.ResolucionDto]),
    (0, class_validator_1.IsArray)({ each: true }),
    (0, class_transformer_1.Type)(() => resolucion_dto_1.ResolucionDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TramiteDto.prototype, "listaResolucion", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [providencia_dto_1.ProvidenciaDto]),
    (0, class_validator_1.IsArray)({ each: true }),
    (0, class_transformer_1.Type)(() => providencia_dto_1.ProvidenciaDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TramiteDto.prototype, "listaProvidencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [informe_dto_1.InformeDto]),
    (0, class_validator_1.IsArray)({ each: true }),
    (0, class_transformer_1.Type)(() => informe_dto_1.InformeDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TramiteDto.prototype, "listaInforme", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [notificacion_dto_1.NotificacionDto]),
    (0, class_validator_1.IsArray)({ each: true }),
    (0, class_transformer_1.Type)(() => notificacion_dto_1.NotificacionDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TramiteDto.prototype, "listaNotificacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [actos_administrativos_dto_1.ActoAdministrativoDto]),
    (0, class_validator_1.IsArray)({ each: true }),
    (0, class_transformer_1.Type)(() => actos_administrativos_dto_1.ActoAdministrativoDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TramiteDto.prototype, "listaActoAdministrativo", void 0);
exports.TramiteDto = TramiteDto;
class TramiteCreacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteCreacionDto.prototype, "correlativo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TramiteCreacionDto.prototype, "codigoUnico", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteCreacionDto.prototype, "areaMinera", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteCreacionDto.prototype, "clasificacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TramiteCreacionDto.prototype, "nroCuadricula", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteCreacionDto.prototype, "departamento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteCreacionDto.prototype, "provincia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteCreacionDto.prototype, "municipio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteCreacionDto.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TramiteCreacionDto.prototype, "estadoAccion", void 0);
exports.TramiteCreacionDto = TramiteCreacionDto;
class TramiteModificacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteModificacionDto.prototype, "correlativo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], TramiteModificacionDto.prototype, "codigoUnico", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteModificacionDto.prototype, "areaMinera", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteModificacionDto.prototype, "clasificacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], TramiteModificacionDto.prototype, "nroCuadricula", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteModificacionDto.prototype, "departamento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteModificacionDto.prototype, "provincia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteModificacionDto.prototype, "municipio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteModificacionDto.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TramiteModificacionDto.prototype, "estadoAccion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsArray)({ each: true }),
    (0, class_transformer_1.Type)(() => resolucion_dto_1.ResolucionDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TramiteModificacionDto.prototype, "listaResolucion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsArray)({ each: true }),
    (0, class_transformer_1.Type)(() => providencia_dto_1.ProvidenciaDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TramiteModificacionDto.prototype, "listaProvidencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsArray)({ each: true }),
    (0, class_transformer_1.Type)(() => notificacion_dto_1.NotificacionDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TramiteModificacionDto.prototype, "listaNotificacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsArray)({ each: true }),
    (0, class_transformer_1.Type)(() => actos_administrativos_dto_1.ActoAdministrativoDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TramiteModificacionDto.prototype, "listaActoAdministrativo", void 0);
exports.TramiteModificacionDto = TramiteModificacionDto;
//# sourceMappingURL=tramite.dto.js.map