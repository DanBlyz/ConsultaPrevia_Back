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
exports.BuzonEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let BuzonEntity = class BuzonEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'BUZON_ID' }),
    __metadata("design:type", Number)
], BuzonEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'UNI_ORGANIZACIONAL' }),
    __metadata("design:type", String)
], BuzonEntity.prototype, "uniOrganizacional", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'PUESTO' }),
    __metadata("design:type", String)
], BuzonEntity.prototype, "puesto", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ESTADO' }),
    __metadata("design:type", String)
], BuzonEntity.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'REF_UNI_ORG_ID' }),
    __metadata("design:type", Number)
], BuzonEntity.prototype, "refUniOrganizacionalId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'REF_PUESTO_ID' }),
    __metadata("design:type", Number)
], BuzonEntity.prototype, "refPuestoId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.BuzonUsuarioEntity, (buzonUsuario) => buzonUsuario.buzon),
    (0, typeorm_1.JoinColumn)({ name: 'BUZON_ID' }),
    __metadata("design:type", Array)
], BuzonEntity.prototype, "listaBuzonUsuario", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.SeguimientoEntity, (seguimientoOrigen) => seguimientoOrigen.buzonOrigen),
    (0, typeorm_1.JoinColumn)({ name: 'BUZON_ID_ORIGEN' }),
    __metadata("design:type", Array)
], BuzonEntity.prototype, "listaSeguimientoOrigen", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.SeguimientoEntity, (seguimientoDestino) => seguimientoDestino.buzonDestino),
    (0, typeorm_1.JoinColumn)({ name: 'BUZON_ID_DESTINO' }),
    __metadata("design:type", Array)
], BuzonEntity.prototype, "listaSeguimientoDestino", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.SeguimientoEntity, (seguimientoActual) => seguimientoActual.buzonActual),
    (0, typeorm_1.JoinColumn)({ name: 'BUZON_ID_ACTUAL' }),
    __metadata("design:type", Array)
], BuzonEntity.prototype, "listaSeguimientoActual", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.ClasificacionBuzonEntity, (clasificacionBuzon) => clasificacionBuzon.buzon),
    (0, typeorm_1.JoinColumn)({ name: 'BUZON_ID' }),
    __metadata("design:type", Array)
], BuzonEntity.prototype, "listaClasificacionBuzon", void 0);
BuzonEntity = __decorate([
    (0, typeorm_1.Entity)('BUZON', { schema: 'correspondencia' })
], BuzonEntity);
exports.BuzonEntity = BuzonEntity;
//# sourceMappingURL=buzon.entity.js.map