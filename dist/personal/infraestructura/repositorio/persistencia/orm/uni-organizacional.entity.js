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
var UniOrganizacionalEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniOrganizacionalEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let UniOrganizacionalEntity = UniOrganizacionalEntity_1 = class UniOrganizacionalEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'UNI_ORG_ID' }),
    __metadata("design:type", Number)
], UniOrganizacionalEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'CODIGO' }),
    __metadata("design:type", String)
], UniOrganizacionalEntity.prototype, "codigo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'SIGLA' }),
    __metadata("design:type", String)
], UniOrganizacionalEntity.prototype, "sigla", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NOMBRE' }),
    __metadata("design:type", String)
], UniOrganizacionalEntity.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ESTA_ACTIVA' }),
    __metadata("design:type", Boolean)
], UniOrganizacionalEntity.prototype, "estaActiva", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'UNI_ORG_SUPERIOR_ID', nullable: true }),
    __metadata("design:type", Number)
], UniOrganizacionalEntity.prototype, "uniOrganizacionalSuperiorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UniOrganizacionalEntity_1, (uniOrganizacional) => uniOrganizacional.listaUniOrganizacional),
    (0, typeorm_1.JoinColumn)({ name: 'UNI_ORG_SUPERIOR_ID' }),
    __metadata("design:type", UniOrganizacionalEntity)
], UniOrganizacionalEntity.prototype, "uniOrganizacionalSuperior", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UniOrganizacionalEntity_1, (uniOrganizacional) => uniOrganizacional.uniOrganizacionalSuperior),
    (0, typeorm_1.JoinColumn)({ name: 'UNI_ORG_ID' }),
    __metadata("design:type", Array)
], UniOrganizacionalEntity.prototype, "listaUniOrganizacional", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.InfoLaboralEntity, (infoLaboral) => infoLaboral.uniOrganizacional),
    (0, typeorm_1.JoinColumn)({ name: 'UNI_ORG_ID' }),
    __metadata("design:type", Array)
], UniOrganizacionalEntity.prototype, "listaInfoLaboral", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.PuestoEntity, (puesto) => puesto.uniOrganizacional),
    (0, typeorm_1.JoinColumn)({ name: 'UNI_ORG_ID' }),
    __metadata("design:type", Array)
], UniOrganizacionalEntity.prototype, "listaPuesto", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.PuestoPersonaEntity, (puestoPersona) => puestoPersona.uniOrganizacional),
    (0, typeorm_1.JoinColumn)({ name: 'UNI_ORG_ID' }),
    __metadata("design:type", Array)
], UniOrganizacionalEntity.prototype, "listaPuestoPersona", void 0);
UniOrganizacionalEntity = UniOrganizacionalEntity_1 = __decorate([
    (0, typeorm_1.Entity)('UNI_ORGANIZACIONAL', { schema: 'personal' })
], UniOrganizacionalEntity);
exports.UniOrganizacionalEntity = UniOrganizacionalEntity;
//# sourceMappingURL=uni-organizacional.entity.js.map