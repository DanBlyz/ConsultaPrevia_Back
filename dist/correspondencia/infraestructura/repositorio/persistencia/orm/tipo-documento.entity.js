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
exports.TipoDocumentoEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let TipoDocumentoEntity = class TipoDocumentoEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'TIPO_DOC_ID' }),
    __metadata("design:type", Number)
], TipoDocumentoEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'SIGLA' }),
    __metadata("design:type", String)
], TipoDocumentoEntity.prototype, "sigla", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NOMBRE' }),
    __metadata("design:type", String)
], TipoDocumentoEntity.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'DESCRIPCION' }),
    __metadata("design:type", String)
], TipoDocumentoEntity.prototype, "descripcion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ESTA_ACTIVO' }),
    __metadata("design:type", Boolean)
], TipoDocumentoEntity.prototype, "estaActivo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.DocumentoEntity, (documento) => documento.tipoDocumento),
    (0, typeorm_1.JoinColumn)({ name: 'TIPO_DOC_ID' }),
    __metadata("design:type", Array)
], TipoDocumentoEntity.prototype, "listaDocumento", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.PlantillaEntity, (plantilla) => plantilla.tipoDocumento),
    (0, typeorm_1.JoinColumn)({ name: 'TIPO_DOC_ID' }),
    __metadata("design:type", Array)
], TipoDocumentoEntity.prototype, "listaPlantilla", void 0);
TipoDocumentoEntity = __decorate([
    (0, typeorm_1.Entity)('TIPO_DOCUMENTO', { schema: 'correspondencia' })
], TipoDocumentoEntity);
exports.TipoDocumentoEntity = TipoDocumentoEntity;
//# sourceMappingURL=tipo-documento.entity.js.map