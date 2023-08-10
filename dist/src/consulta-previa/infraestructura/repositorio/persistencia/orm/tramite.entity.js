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
exports.TramiteEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const resolucion_entity_1 = require("./resolucion.entity");
const providencia_entity_1 = require("./providencia.entity");
const informe_entity_1 = require("./informe.entity");
const notificacion_entity_1 = require("./notificacion.entity");
const actos_administrativos_entity_1 = require("./actos-administrativos.entity");
let TramiteEntity = class TramiteEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idtramite' }),
    __metadata("design:type", Number)
], TramiteEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'correlativo', default: null }),
    __metadata("design:type", String)
], TramiteEntity.prototype, "correlativo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'codigounico', default: 0 }),
    __metadata("design:type", Number)
], TramiteEntity.prototype, "codigoUnico", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'areaminera', default: null }),
    __metadata("design:type", String)
], TramiteEntity.prototype, "areaMinera", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'clasificacion', default: null }),
    __metadata("design:type", String)
], TramiteEntity.prototype, "clasificacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'nrocuadricula', default: 0 }),
    __metadata("design:type", Number)
], TramiteEntity.prototype, "nroCuadricula", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'departamento', default: null }),
    __metadata("design:type", String)
], TramiteEntity.prototype, "departamento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'provincia', default: null }),
    __metadata("design:type", String)
], TramiteEntity.prototype, "provincia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'municipio', default: null }),
    __metadata("design:type", String)
], TramiteEntity.prototype, "municipio", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'estado', default: null }),
    __metadata("design:type", String)
], TramiteEntity.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'estadoaccion', default: null }),
    __metadata("design:type", String)
], TramiteEntity.prototype, "estadoAccion", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [resolucion_entity_1.ResolucionEntity]),
    (0, typeorm_1.OneToMany)(() => resolucion_entity_1.ResolucionEntity, (resolucion) => resolucion.tramite),
    (0, typeorm_1.JoinColumn)({ name: 'idtramite' }),
    __metadata("design:type", Array)
], TramiteEntity.prototype, "listaResolucion", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [providencia_entity_1.ProvidenciaEntity]),
    (0, typeorm_1.OneToMany)(() => providencia_entity_1.ProvidenciaEntity, (providencia) => providencia.tramite),
    (0, typeorm_1.JoinColumn)({ name: 'idtramite' }),
    __metadata("design:type", Array)
], TramiteEntity.prototype, "listaProvidencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [informe_entity_1.InformeEntity]),
    (0, typeorm_1.OneToMany)(() => informe_entity_1.InformeEntity, (informe) => informe.tramite),
    (0, typeorm_1.JoinColumn)({ name: 'idtramite' }),
    __metadata("design:type", Array)
], TramiteEntity.prototype, "listaInforme", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [notificacion_entity_1.NotificacionEntity]),
    (0, typeorm_1.OneToMany)(() => notificacion_entity_1.NotificacionEntity, (notificacion) => notificacion.tramite),
    (0, typeorm_1.JoinColumn)({ name: 'idtramite' }),
    __metadata("design:type", Array)
], TramiteEntity.prototype, "listaNotificacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [actos_administrativos_entity_1.ActoAdministrativoEntity]),
    (0, typeorm_1.OneToMany)(() => actos_administrativos_entity_1.ActoAdministrativoEntity, (actoAdministrativo) => actoAdministrativo.tramite),
    (0, typeorm_1.JoinColumn)({ name: 'idtramite' }),
    __metadata("design:type", Array)
], TramiteEntity.prototype, "listaActoAdministrativo", void 0);
TramiteEntity = __decorate([
    (0, typeorm_1.Entity)('tramite', { schema: 'consulta-previa' })
], TramiteEntity);
exports.TramiteEntity = TramiteEntity;
//# sourceMappingURL=tramite.entity.js.map