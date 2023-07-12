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
exports.InfoLaboralEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let InfoLaboralEntity = class InfoLaboralEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryColumn)({ name: 'PERS_ID' }),
    __metadata("design:type", Number)
], InfoLaboralEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TIPO_LABORAL' }),
    __metadata("design:type", String)
], InfoLaboralEntity.prototype, "tipoLaboral", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'CORREO_INSTITUCIONAL', nullable: true }),
    __metadata("design:type", String)
], InfoLaboralEntity.prototype, "correoInstitucional", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NUM_INTERNO', nullable: true }),
    __metadata("design:type", String)
], InfoLaboralEntity.prototype, "numInterno", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ESTADO' }),
    __metadata("design:type", String)
], InfoLaboralEntity.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'CUENTA', nullable: true }),
    __metadata("design:type", String)
], InfoLaboralEntity.prototype, "cuenta", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'UNI_ORG_ID' }),
    __metadata("design:type", Number)
], InfoLaboralEntity.prototype, "uniOrganizacionalId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'PUESTO_ID', nullable: true }),
    __metadata("design:type", Number)
], InfoLaboralEntity.prototype, "puestoId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => _1.PersonaEntity, (persona) => persona.infoLaboral),
    (0, typeorm_1.JoinColumn)({ name: 'PERS_ID' }),
    __metadata("design:type", _1.PersonaEntity)
], InfoLaboralEntity.prototype, "persona", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.UniOrganizacionalEntity, (uniOrganizacional) => uniOrganizacional.listaInfoLaboral),
    (0, typeorm_1.JoinColumn)({ name: 'UNI_ORG_ID' }),
    __metadata("design:type", _1.UniOrganizacionalEntity)
], InfoLaboralEntity.prototype, "uniOrganizacional", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.PuestoEntity, (puesto) => puesto.listaInfoLaboral),
    (0, typeorm_1.JoinColumn)({ name: 'PUESTO_ID' }),
    __metadata("design:type", _1.PuestoEntity)
], InfoLaboralEntity.prototype, "puesto", void 0);
InfoLaboralEntity = __decorate([
    (0, typeorm_1.Entity)('INFO_LABORAL', { schema: 'personal' })
], InfoLaboralEntity);
exports.InfoLaboralEntity = InfoLaboralEntity;
//# sourceMappingURL=info-laboral.entity.js.map