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
exports.ContenidoEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let ContenidoEntity = class ContenidoEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", Number)
], ContenidoEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'VERSION' }),
    __metadata("design:type", Number)
], ContenidoEntity.prototype, "version", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'PLAN_ID' }),
    __metadata("design:type", Number)
], ContenidoEntity.prototype, "planillaId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => _1.DocumentoEntity, (documento) => documento.contenido),
    __metadata("design:type", _1.DocumentoEntity)
], ContenidoEntity.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.PlantillaEntity, (plantilla) => plantilla.listaContenido),
    (0, typeorm_1.JoinColumn)({ name: 'PLAN_ID' }),
    __metadata("design:type", _1.PlantillaEntity)
], ContenidoEntity.prototype, "plantilla", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.ContenidoDetalleEntity, (contenidoDetalle) => contenidoDetalle.contenido),
    (0, typeorm_1.JoinColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", Array)
], ContenidoEntity.prototype, "listaContenidoDetalle", void 0);
ContenidoEntity = __decorate([
    (0, typeorm_1.Entity)('CONTENIDO', { schema: 'correspondencia' })
], ContenidoEntity);
exports.ContenidoEntity = ContenidoEntity;
//# sourceMappingURL=contenido.entity.js.map