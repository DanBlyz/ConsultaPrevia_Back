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
exports.ActoAdministrativoModificacionDto = exports.ActoAdministrativoCreacionDto = exports.ActoAdministrativoDto = void 0;
const classes_1 = require("@automapper/classes");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const tramite_dto_1 = require("./tramite.dto");
const pago_cpt_dto_1 = require("./pago-cpt.dto");
const viaje_dto_1 = require("./viaje.dto");
class ActoAdministrativoDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], ActoAdministrativoDto.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], ActoAdministrativoDto.prototype, "fk_idTramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ActoAdministrativoDto.prototype, "viajeRealizado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActoAdministrativoDto.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActoAdministrativoDto.prototype, "encargado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActoAdministrativoDto.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [tramite_dto_1.TramiteDto]),
    (0, class_transformer_1.Type)(() => tramite_dto_1.TramiteDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], ActoAdministrativoDto.prototype, "tramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [pago_cpt_dto_1.PagoCptDto]),
    (0, class_transformer_1.Type)(() => pago_cpt_dto_1.PagoCptDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], ActoAdministrativoDto.prototype, "pagoCpt", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [viaje_dto_1.ViajeDto]),
    (0, class_transformer_1.Type)(() => viaje_dto_1.ViajeDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], ActoAdministrativoDto.prototype, "viaje", void 0);
exports.ActoAdministrativoDto = ActoAdministrativoDto;
class ActoAdministrativoCreacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], ActoAdministrativoCreacionDto.prototype, "fk_idTramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ActoAdministrativoCreacionDto.prototype, "viajeRealizado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActoAdministrativoCreacionDto.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActoAdministrativoCreacionDto.prototype, "encargado", void 0);
exports.ActoAdministrativoCreacionDto = ActoAdministrativoCreacionDto;
class ActoAdministrativoModificacionDto {
}
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ActoAdministrativoModificacionDto.prototype, "fk_idTramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ActoAdministrativoModificacionDto.prototype, "viajeRealizado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ActoAdministrativoModificacionDto.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ActoAdministrativoModificacionDto.prototype, "encargado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ActoAdministrativoModificacionDto.prototype, "estado", void 0);
exports.ActoAdministrativoModificacionDto = ActoAdministrativoModificacionDto;
//# sourceMappingURL=actos-administrativos.dto.js.map