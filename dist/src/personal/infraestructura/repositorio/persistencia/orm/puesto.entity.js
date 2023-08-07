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
exports.PuestoEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let PuestoEntity = exports.PuestoEntity = class PuestoEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'PUESTO_ID' }),
    __metadata("design:type", Number)
], PuestoEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NOMBRE' }),
    __metadata("design:type", String)
], PuestoEntity.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'DESCRIPCION', nullable: true }),
    __metadata("design:type", String)
], PuestoEntity.prototype, "descripcion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NIVEL_JERARQUICO' }),
    __metadata("design:type", Number)
], PuestoEntity.prototype, "nivelJerarquico", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ESTA_ACTIVO' }),
    __metadata("design:type", Boolean)
], PuestoEntity.prototype, "estaActivo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'UNI_ORG_ID' }),
    __metadata("design:type", Number)
], PuestoEntity.prototype, "uniOrganizacionalId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.UniOrganizacionalEntity, (uniOrganizacional) => uniOrganizacional.listaPuesto),
    (0, typeorm_1.JoinColumn)({ name: 'UNI_ORG_ID' }),
    __metadata("design:type", _1.UniOrganizacionalEntity)
], PuestoEntity.prototype, "uniOrganizacional", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.InfoLaboralEntity, (infoLaboral) => infoLaboral.puesto),
    (0, typeorm_1.JoinColumn)({ name: 'PUESTO_ID' }),
    __metadata("design:type", Array)
], PuestoEntity.prototype, "listaInfoLaboral", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.PuestoPersonaEntity, (puestoPersona) => puestoPersona.puesto),
    (0, typeorm_1.JoinColumn)({ name: 'PUESTO_ID' }),
    __metadata("design:type", Array)
], PuestoEntity.prototype, "listaPuestoPersona", void 0);
exports.PuestoEntity = PuestoEntity = __decorate([
    (0, typeorm_1.Entity)('PUESTO', { schema: 'personal' })
], PuestoEntity);
//# sourceMappingURL=puesto.entity.js.map