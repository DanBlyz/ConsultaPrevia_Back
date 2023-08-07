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
exports.PagoCptEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const actos_administrativos_entity_1 = require("./actos-administrativos.entity");
let PagoCptEntity = exports.PagoCptEntity = class PagoCptEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idpago' }),
    __metadata("design:type", Number)
], PagoCptEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'fk_idactos' }),
    __metadata("design:type", Number)
], PagoCptEntity.prototype, "fk_idActos", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'pagorealizado', default: false }),
    __metadata("design:type", Boolean)
], PagoCptEntity.prototype, "pagoRealizado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'flujo', default: null }),
    __metadata("design:type", String)
], PagoCptEntity.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'diasviaje', default: null }),
    __metadata("design:type", Number)
], PagoCptEntity.prototype, "diasViaje", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'tipoviaje', default: null }),
    __metadata("design:type", String)
], PagoCptEntity.prototype, "tipoViaje", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'montototal', default: 0 }),
    __metadata("design:type", Number)
], PagoCptEntity.prototype, "montoTotal", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'apm', default: null }),
    __metadata("design:type", String)
], PagoCptEntity.prototype, "apm", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'descripcion', default: null }),
    __metadata("design:type", String)
], PagoCptEntity.prototype, "descripcion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'estado', default: null }),
    __metadata("design:type", String)
], PagoCptEntity.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'transaccion', default: 0 }),
    __metadata("design:type", Number)
], PagoCptEntity.prototype, "transaccion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'fechaactual', default: () => 'NOW()' }),
    __metadata("design:type", Date)
], PagoCptEntity.prototype, "fechaActual", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'canal', default: null }),
    __metadata("design:type", String)
], PagoCptEntity.prototype, "canal", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'cpt', default: 0 }),
    __metadata("design:type", Number)
], PagoCptEntity.prototype, "cpt", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'fechavigencia', default: null }),
    __metadata("design:type", Date)
], PagoCptEntity.prototype, "fechaVigencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'fechavalidez', default: null }),
    __metadata("design:type", Date)
], PagoCptEntity.prototype, "fechaValidez", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'iniciovigencia', default: null }),
    __metadata("design:type", Date)
], PagoCptEntity.prototype, "inicioVigencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'tiposervicio', default: null }),
    __metadata("design:type", String)
], PagoCptEntity.prototype, "tipoServicio", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => actos_administrativos_entity_1.ActoAdministrativoEntity, (actoAdministrativo) => actoAdministrativo.pagoCpt),
    (0, typeorm_1.JoinColumn)({ name: 'fk_idactos' }),
    __metadata("design:type", actos_administrativos_entity_1.ActoAdministrativoEntity)
], PagoCptEntity.prototype, "actoAdministrativo", void 0);
exports.PagoCptEntity = PagoCptEntity = __decorate([
    (0, typeorm_1.Entity)('pagocpt', { schema: 'consulta-previa' })
], PagoCptEntity);
//# sourceMappingURL=pago-cpt.entity.js.map