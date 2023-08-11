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
exports.ResolucionFiltroDto = void 0;
const classes_1 = require("@automapper/classes");
const class_validator_1 = require("class-validator");
const filtros_1 = require("../../../../comun/transferencia/filtros");
const tramite_filtro_dto_1 = require("./tramite-filtro.dto");
const class_transformer_1 = require("class-transformer");
class ResolucionFiltroDto extends filtros_1.FiltroBaseDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ResolucionFiltroDto.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ResolucionFiltroDto.prototype, "fk_idTramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ResolucionFiltroDto.prototype, "informe", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ResolucionFiltroDto.prototype, "correlativo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ResolucionFiltroDto.prototype, "informeAprobado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ResolucionFiltroDto.prototype, "actoAdministrativo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ResolucionFiltroDto.prototype, "resolucionPdf", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ResolucionFiltroDto.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ResolucionFiltroDto.prototype, "referencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [tramite_filtro_dto_1.TramiteFiltroDto]),
    (0, class_transformer_1.Type)(() => tramite_filtro_dto_1.TramiteFiltroDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], ResolucionFiltroDto.prototype, "tramite", void 0);
exports.ResolucionFiltroDto = ResolucionFiltroDto;
//# sourceMappingURL=resolucion-filtro.dto.js.map