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
exports.PersonaEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const orm_1 = require("../orm");
let PersonaEntity = exports.PersonaEntity = class PersonaEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'PERS_ID' }),
    __metadata("design:type", Number)
], PersonaEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'CODIGO' }),
    __metadata("design:type", String)
], PersonaEntity.prototype, "codigo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'PRIM_APELLIDO' }),
    __metadata("design:type", String)
], PersonaEntity.prototype, "primApellido", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'SEG_APELLIDO', nullable: true }),
    __metadata("design:type", String)
], PersonaEntity.prototype, "segApellido", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NOMBRE' }),
    __metadata("design:type", String)
], PersonaEntity.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NUM_DOCUMENTO' }),
    __metadata("design:type", String)
], PersonaEntity.prototype, "numDocumento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'EXPEDICION' }),
    __metadata("design:type", String)
], PersonaEntity.prototype, "expedicion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'FEC_NACIMIENTO', type: 'date' }),
    __metadata("design:type", Date)
], PersonaEntity.prototype, "fecNacimiento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'CORREO_PERSONAL' }),
    __metadata("design:type", String)
], PersonaEntity.prototype, "correoPersonal", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'CELULAR_PERSONAL' }),
    __metadata("design:type", String)
], PersonaEntity.prototype, "celularPersonal", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => orm_1.FotografiaEntity, (fotografia) => fotografia.persona),
    __metadata("design:type", orm_1.FotografiaEntity)
], PersonaEntity.prototype, "fotografia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.OneToOne)(() => orm_1.InfoLaboralEntity, (infoLaboral) => infoLaboral.persona),
    __metadata("design:type", orm_1.InfoLaboralEntity)
], PersonaEntity.prototype, "infoLaboral", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orm_1.PuestoPersonaEntity, (puestoPersona) => puestoPersona.persona),
    (0, typeorm_1.JoinColumn)({ name: 'PERS_ID' }),
    __metadata("design:type", Array)
], PersonaEntity.prototype, "listaPuestoPersona", void 0);
exports.PersonaEntity = PersonaEntity = __decorate([
    (0, typeorm_1.Entity)('PERSONA', { schema: 'personal' })
], PersonaEntity);
//# sourceMappingURL=persona.entity.js.map