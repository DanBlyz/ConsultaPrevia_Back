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
exports.DocumentoEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const tramite_entity_1 = require("./tramite.entity");
const sujeto_identificado_entity_1 = require("./sujeto-identificado.entity");
let DocumentoEntity = class DocumentoEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'iddocumento' }),
    __metadata("design:type", Number)
], DocumentoEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'fk_idtramite', default: null }),
    __metadata("design:type", Number)
], DocumentoEntity.prototype, "fk_idTramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'correlativo', default: null }),
    __metadata("design:type", String)
], DocumentoEntity.prototype, "correlativo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'referencia', default: null }),
    __metadata("design:type", String)
], DocumentoEntity.prototype, "referencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'documentopdf', default: null }),
    __metadata("design:type", String)
], DocumentoEntity.prototype, "documentoPdf", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'tipodocumento', default: null }),
    __metadata("design:type", String)
], DocumentoEntity.prototype, "tipoDocumento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'flujo', default: null }),
    __metadata("design:type", String)
], DocumentoEntity.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'estado', default: null }),
    __metadata("design:type", String)
], DocumentoEntity.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [tramite_entity_1.TramiteEntity]),
    (0, typeorm_1.ManyToOne)(() => tramite_entity_1.TramiteEntity, (tramite) => tramite.listaDocumento),
    (0, typeorm_1.JoinColumn)({ name: 'fk_idtramite' }),
    __metadata("design:type", tramite_entity_1.TramiteEntity)
], DocumentoEntity.prototype, "tramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [sujeto_identificado_entity_1.SujetoIdentificadoEntity]),
    (0, typeorm_1.OneToMany)(() => sujeto_identificado_entity_1.SujetoIdentificadoEntity, (sujetoidentificado) => sujetoidentificado.documento),
    (0, typeorm_1.JoinColumn)({ name: 'iddocumento' }),
    __metadata("design:type", Array)
], DocumentoEntity.prototype, "listaSujetoIdentificado", void 0);
DocumentoEntity = __decorate([
    (0, typeorm_1.Entity)('documento', { schema: 'consulta-previa' })
], DocumentoEntity);
exports.DocumentoEntity = DocumentoEntity;
//# sourceMappingURL=documento.entity.js.map