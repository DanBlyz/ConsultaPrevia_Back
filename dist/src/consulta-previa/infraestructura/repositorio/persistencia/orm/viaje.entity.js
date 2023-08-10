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
exports.ViajeEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const actos_administrativos_entity_1 = require("./actos-administrativos.entity");
let ViajeEntity = class ViajeEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idviaje' }),
    __metadata("design:type", Number)
], ViajeEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'fk_idactos', default: null }),
    __metadata("design:type", Number)
], ViajeEntity.prototype, "fk_idActos", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'fechainicio', default: null }),
    __metadata("design:type", Date)
], ViajeEntity.prototype, "fechaInicio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'fechafin', default: null }),
    __metadata("design:type", Date)
], ViajeEntity.prototype, "fechaFin", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'descripcion', default: null }),
    __metadata("design:type", String)
], ViajeEntity.prototype, "descripcion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'nroformulario', default: null }),
    __metadata("design:type", String)
], ViajeEntity.prototype, "nroFormulario", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'formulariopdf', default: null }),
    __metadata("design:type", String)
], ViajeEntity.prototype, "formularioPdf", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => actos_administrativos_entity_1.ActoAdministrativoEntity, (actoAdministrativo) => actoAdministrativo.viaje),
    (0, typeorm_1.JoinColumn)({ name: 'fk_idactos' }),
    __metadata("design:type", actos_administrativos_entity_1.ActoAdministrativoEntity)
], ViajeEntity.prototype, "actoAdministrativo", void 0);
ViajeEntity = __decorate([
    (0, typeorm_1.Entity)('viaje', { schema: 'consulta-previa' })
], ViajeEntity);
exports.ViajeEntity = ViajeEntity;
//# sourceMappingURL=viaje.entity.js.map