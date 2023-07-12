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
exports.EtiquetaEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let EtiquetaEntity = class EtiquetaEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ETIQ_ID' }),
    __metadata("design:type", Number)
], EtiquetaEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NOMBRE' }),
    __metadata("design:type", String)
], EtiquetaEntity.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'DESCRIPCION' }),
    __metadata("design:type", String)
], EtiquetaEntity.prototype, "descripcion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'USUARIO' }),
    __metadata("design:type", String)
], EtiquetaEntity.prototype, "usuario", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ES_PUBLICA' }),
    __metadata("design:type", Boolean)
], EtiquetaEntity.prototype, "esPublica", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'DOC_ID' }),
    __metadata("design:type", Number)
], EtiquetaEntity.prototype, "documentoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.DocumentoEntity, (documento) => documento.listaEtiqueta),
    (0, typeorm_1.JoinColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", _1.DocumentoEntity)
], EtiquetaEntity.prototype, "documento", void 0);
EtiquetaEntity = __decorate([
    (0, typeorm_1.Entity)('ETIQUETA', { schema: 'correspondencia' })
], EtiquetaEntity);
exports.EtiquetaEntity = EtiquetaEntity;
//# sourceMappingURL=etiqueta.entity.js.map