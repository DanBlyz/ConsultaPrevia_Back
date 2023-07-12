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
exports.DocumentoSeguimientoEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let DocumentoSeguimientoEntity = class DocumentoSeguimientoEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'DOC_SEG_ID' }),
    __metadata("design:type", Number)
], DocumentoSeguimientoEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ACCION' }),
    __metadata("design:type", String)
], DocumentoSeguimientoEntity.prototype, "accion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'INSTANTE' }),
    __metadata("design:type", Date)
], DocumentoSeguimientoEntity.prototype, "instante", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'USUARIO' }),
    __metadata("design:type", String)
], DocumentoSeguimientoEntity.prototype, "usuario", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'DOC_ID' }),
    __metadata("design:type", Number)
], DocumentoSeguimientoEntity.prototype, "documentoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.DocumentoEntity, (documento) => documento.listaDocumentoSeguimiento),
    (0, typeorm_1.JoinColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", _1.DocumentoEntity)
], DocumentoSeguimientoEntity.prototype, "documento", void 0);
DocumentoSeguimientoEntity = __decorate([
    (0, typeorm_1.Entity)('DOCUMENTO_SEGUIMIENTO', { schema: 'correspondencia' })
], DocumentoSeguimientoEntity);
exports.DocumentoSeguimientoEntity = DocumentoSeguimientoEntity;
//# sourceMappingURL=documento-seguimiento.entity.js.map