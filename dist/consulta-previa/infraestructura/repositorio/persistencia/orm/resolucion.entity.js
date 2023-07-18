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
exports.ResolucionEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const tramite_entity_1 = require("./tramite.entity");
let ResolucionEntity = class ResolucionEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idresolucion' }),
    __metadata("design:type", Number)
], ResolucionEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'fk_idtramite' }),
    __metadata("design:type", Number)
], ResolucionEntity.prototype, "fk_idTramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'informe' }),
    __metadata("design:type", String)
], ResolucionEntity.prototype, "informe", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'resolucion' }),
    __metadata("design:type", String)
], ResolucionEntity.prototype, "resolucion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'informeaprobado', default: false }),
    __metadata("design:type", Boolean)
], ResolucionEntity.prototype, "informeAprobado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'actosadministrativos' }),
    __metadata("design:type", Boolean)
], ResolucionEntity.prototype, "actosAdministrativos", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'resolucionpdf' }),
    __metadata("design:type", String)
], ResolucionEntity.prototype, "resolucionPdf", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'flujo' }),
    __metadata("design:type", String)
], ResolucionEntity.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'asunto' }),
    __metadata("design:type", String)
], ResolucionEntity.prototype, "asunto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tramite_entity_1.TramiteEntity, (tramite) => tramite.listaResolucion),
    (0, typeorm_1.JoinColumn)({ name: 'fk_idtramite' }),
    __metadata("design:type", tramite_entity_1.TramiteEntity)
], ResolucionEntity.prototype, "tramite", void 0);
ResolucionEntity = __decorate([
    (0, typeorm_1.Entity)('resolucion', { schema: 'consulta-previa' })
], ResolucionEntity);
exports.ResolucionEntity = ResolucionEntity;
//# sourceMappingURL=resolucion.entity.js.map