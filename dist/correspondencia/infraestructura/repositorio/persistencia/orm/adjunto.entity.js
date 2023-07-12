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
exports.AdjuntoEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let AdjuntoEntity = class AdjuntoEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ADJ_ID' }),
    __metadata("design:type", Number)
], AdjuntoEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TIPO' }),
    __metadata("design:type", String)
], AdjuntoEntity.prototype, "tipo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'CODIGO' }),
    __metadata("design:type", String)
], AdjuntoEntity.prototype, "codigo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TIPO_MIME' }),
    __metadata("design:type", String)
], AdjuntoEntity.prototype, "tipoMime", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TAMANIO' }),
    __metadata("design:type", Number)
], AdjuntoEntity.prototype, "tamanio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'EXTENSION' }),
    __metadata("design:type", String)
], AdjuntoEntity.prototype, "extension", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ESTA_FIRMADO' }),
    __metadata("design:type", Boolean)
], AdjuntoEntity.prototype, "estaFirmado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NOM_PUBLICO' }),
    __metadata("design:type", String)
], AdjuntoEntity.prototype, "nomPublico", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NOM_PRIVADO' }),
    __metadata("design:type", String)
], AdjuntoEntity.prototype, "nomPrivado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ESTADO' }),
    __metadata("design:type", String)
], AdjuntoEntity.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'DOC_ID' }),
    __metadata("design:type", Number)
], AdjuntoEntity.prototype, "documentoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.DocumentoEntity, (documento) => documento.listaAdjunto),
    (0, typeorm_1.JoinColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", _1.DocumentoEntity)
], AdjuntoEntity.prototype, "documento", void 0);
AdjuntoEntity = __decorate([
    (0, typeorm_1.Entity)('ADJUNTO', { schema: 'correspondencia' })
], AdjuntoEntity);
exports.AdjuntoEntity = AdjuntoEntity;
//# sourceMappingURL=adjunto.entity.js.map