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
exports.PuestoPersonaEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let PuestoPersonaEntity = class PuestoPersonaEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'PUESTO_PERS_ID' }),
    __metadata("design:type", Number)
], PuestoPersonaEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TIPO_MOVILIDAD' }),
    __metadata("design:type", String)
], PuestoPersonaEntity.prototype, "tipoMovilidad", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TIPO_LABORAL' }),
    __metadata("design:type", String)
], PuestoPersonaEntity.prototype, "tipoLaboral", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'FEC_INICIO', type: 'date' }),
    __metadata("design:type", Date)
], PuestoPersonaEntity.prototype, "fecInicio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'FEC_CONCLUSION', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PuestoPersonaEntity.prototype, "fecConclusion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ES_INTERINATO' }),
    __metadata("design:type", Boolean)
], PuestoPersonaEntity.prototype, "esInterinato", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TIENE_DESVINCULACION' }),
    __metadata("design:type", Boolean)
], PuestoPersonaEntity.prototype, "tieneDesvinculacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ESTADO' }),
    __metadata("design:type", String)
], PuestoPersonaEntity.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'PUESTO_ID', nullable: true }),
    __metadata("design:type", Number)
], PuestoPersonaEntity.prototype, "puestoId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'PERS_ID' }),
    __metadata("design:type", Number)
], PuestoPersonaEntity.prototype, "personaId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'UNI_ORG_ID' }),
    __metadata("design:type", Number)
], PuestoPersonaEntity.prototype, "uniOrganizacionalId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.PuestoEntity, (puesto) => puesto.listaPuestoPersona),
    (0, typeorm_1.JoinColumn)({ name: 'PUESTO_ID' }),
    __metadata("design:type", _1.PuestoEntity)
], PuestoPersonaEntity.prototype, "puesto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.PersonaEntity, (persona) => persona.listaPuestoPersona),
    (0, typeorm_1.JoinColumn)({ name: 'PERS_ID' }),
    __metadata("design:type", _1.PersonaEntity)
], PuestoPersonaEntity.prototype, "persona", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.UniOrganizacionalEntity, (uniOrganizacional) => uniOrganizacional.listaPuestoPersona),
    (0, typeorm_1.JoinColumn)({ name: 'UNI_ORG_ID' }),
    __metadata("design:type", _1.UniOrganizacionalEntity)
], PuestoPersonaEntity.prototype, "uniOrganizacional", void 0);
PuestoPersonaEntity = __decorate([
    (0, typeorm_1.Entity)('PUESTO_PERSONA', { schema: 'personal' })
], PuestoPersonaEntity);
exports.PuestoPersonaEntity = PuestoPersonaEntity;
//# sourceMappingURL=puesto-persona.entity.js.map