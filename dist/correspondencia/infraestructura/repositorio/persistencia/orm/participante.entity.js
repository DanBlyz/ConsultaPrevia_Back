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
exports.ParticipanteEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let ParticipanteEntity = class ParticipanteEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'PART_ID' }),
    __metadata("design:type", Number)
], ParticipanteEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TIPO' }),
    __metadata("design:type", String)
], ParticipanteEntity.prototype, "tipo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NOMBRE' }),
    __metadata("design:type", String)
], ParticipanteEntity.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'PUESTO' }),
    __metadata("design:type", String)
], ParticipanteEntity.prototype, "puesto", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'UNI_ORGANIZACIONAL' }),
    __metadata("design:type", String)
], ParticipanteEntity.prototype, "uniOrganizacional", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ENTIDAD' }),
    __metadata("design:type", String)
], ParticipanteEntity.prototype, "entidad", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'DOC_ID' }),
    __metadata("design:type", Number)
], ParticipanteEntity.prototype, "documentoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.DocumentoEntity, (documento) => documento.listaParticipante),
    (0, typeorm_1.JoinColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", _1.DocumentoEntity)
], ParticipanteEntity.prototype, "documento", void 0);
ParticipanteEntity = __decorate([
    (0, typeorm_1.Entity)('PARTICIPANTE', { schema: 'correspondencia' })
], ParticipanteEntity);
exports.ParticipanteEntity = ParticipanteEntity;
//# sourceMappingURL=participante.entity.js.map