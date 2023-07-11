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
exports.DocumentoDetalleEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
let DocumentoDetalleEntity = class DocumentoDetalleEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'DOC_DET_ID' }),
    __metadata("design:type", Number)
], DocumentoDetalleEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TIPO' }),
    __metadata("design:type", String)
], DocumentoDetalleEntity.prototype, "tipo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'VALOR' }),
    __metadata("design:type", String)
], DocumentoDetalleEntity.prototype, "valor", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'DOC_ID' }),
    __metadata("design:type", Number)
], DocumentoDetalleEntity.prototype, "documentoId", void 0);
DocumentoDetalleEntity = __decorate([
    (0, typeorm_1.Entity)('DOCUMENTO_DETALLE', { schema: 'correspondencia' })
], DocumentoDetalleEntity);
exports.DocumentoDetalleEntity = DocumentoDetalleEntity;
//# sourceMappingURL=documento-detalle.entity.js.map