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
exports.ActoAdministrativoEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const tramite_entity_1 = require("./tramite.entity");
const pago_cpt_entity_1 = require("./pago-cpt.entity");
const viaje_entity_1 = require("./viaje.entity");
const resolucion_entity_1 = require("./resolucion.entity");
let ActoAdministrativoEntity = exports.ActoAdministrativoEntity = class ActoAdministrativoEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idactos' }),
    __metadata("design:type", Number)
], ActoAdministrativoEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'fk_idtramite', default: null }),
    __metadata("design:type", Number)
], ActoAdministrativoEntity.prototype, "fk_idTramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'fk_idresolucion', default: null }),
    __metadata("design:type", Number)
], ActoAdministrativoEntity.prototype, "fk_idResolucion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'viajerealizado', default: false }),
    __metadata("design:type", Boolean)
], ActoAdministrativoEntity.prototype, "viajeRealizado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'flujo', default: null }),
    __metadata("design:type", String)
], ActoAdministrativoEntity.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'estado', default: null }),
    __metadata("design:type", String)
], ActoAdministrativoEntity.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [tramite_entity_1.TramiteEntity]),
    (0, typeorm_1.ManyToOne)(() => tramite_entity_1.TramiteEntity, (tramite) => tramite.listaActoAdministrativo),
    (0, typeorm_1.JoinColumn)({ name: 'fk_idtramite' }),
    __metadata("design:type", tramite_entity_1.TramiteEntity)
], ActoAdministrativoEntity.prototype, "tramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [resolucion_entity_1.ResolucionEntity]),
    (0, typeorm_1.ManyToOne)(() => resolucion_entity_1.ResolucionEntity, (resolucion) => resolucion.listaActoAdministrativo),
    (0, typeorm_1.JoinColumn)({ name: 'fk_idresolucion' }),
    __metadata("design:type", resolucion_entity_1.ResolucionEntity)
], ActoAdministrativoEntity.prototype, "resolucion", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [pago_cpt_entity_1.PagoCptEntity]),
    (0, typeorm_1.OneToOne)(() => pago_cpt_entity_1.PagoCptEntity, (pagoCpt) => pagoCpt.actoAdministrativo),
    __metadata("design:type", pago_cpt_entity_1.PagoCptEntity)
], ActoAdministrativoEntity.prototype, "pagoCpt", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [viaje_entity_1.ViajeEntity]),
    (0, typeorm_1.OneToOne)(() => viaje_entity_1.ViajeEntity, (viaje) => viaje.actoAdministrativo),
    __metadata("design:type", viaje_entity_1.ViajeEntity)
], ActoAdministrativoEntity.prototype, "viaje", void 0);
exports.ActoAdministrativoEntity = ActoAdministrativoEntity = __decorate([
    (0, typeorm_1.Entity)('actosadministrativos', { schema: 'consulta-previa' })
], ActoAdministrativoEntity);
//# sourceMappingURL=actos-administrativos.entity.js.map