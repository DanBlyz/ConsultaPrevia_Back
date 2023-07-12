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
exports.PlantillaEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let PlantillaEntity = class PlantillaEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'PLAN_ID' }),
    __metadata("design:type", Number)
], PlantillaEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'FECHA' }),
    __metadata("design:type", Date)
], PlantillaEntity.prototype, "fecha", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'VERSION' }),
    __metadata("design:type", Number)
], PlantillaEntity.prototype, "version", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ESTRUCTURA' }),
    __metadata("design:type", String)
], PlantillaEntity.prototype, "estructura", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TIPO_DOC_ID' }),
    __metadata("design:type", Number)
], PlantillaEntity.prototype, "tipoDocumentoId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.ContenidoEntity, (contenido) => contenido.plantilla),
    (0, typeorm_1.JoinColumn)({ name: 'PLAN_ID' }),
    __metadata("design:type", Array)
], PlantillaEntity.prototype, "listaContenido", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.TipoDocumentoEntity, (tipoDocumento) => tipoDocumento.listaPlantilla),
    (0, typeorm_1.JoinColumn)({ name: 'TIPO_DOC_ID' }),
    __metadata("design:type", _1.TipoDocumentoEntity)
], PlantillaEntity.prototype, "tipoDocumento", void 0);
PlantillaEntity = __decorate([
    (0, typeorm_1.Entity)('PLANTILLA', { schema: 'correspondencia' })
], PlantillaEntity);
exports.PlantillaEntity = PlantillaEntity;
//# sourceMappingURL=plantilla.entity.js.map