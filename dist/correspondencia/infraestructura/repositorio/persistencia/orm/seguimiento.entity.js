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
exports.SeguimientoEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let SeguimientoEntity = class SeguimientoEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'SEG_ID' }),
    __metadata("design:type", Number)
], SeguimientoEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ACCION' }),
    __metadata("design:type", String)
], SeguimientoEntity.prototype, "accion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'INSTANTE' }),
    __metadata("design:type", Date)
], SeguimientoEntity.prototype, "instante", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'PROVEIDO_ACCION' }),
    __metadata("design:type", String)
], SeguimientoEntity.prototype, "proveidoAccion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'PROVEIDO' }),
    __metadata("design:type", String)
], SeguimientoEntity.prototype, "proveido", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'FEC_RECEPCION' }),
    __metadata("design:type", Date)
], SeguimientoEntity.prototype, "fecRecepcion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'OBSERVACION' }),
    __metadata("design:type", String)
], SeguimientoEntity.prototype, "observacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ES_BORRADOR' }),
    __metadata("design:type", Boolean)
], SeguimientoEntity.prototype, "esBorrador", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ESTADO' }),
    __metadata("design:type", String)
], SeguimientoEntity.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'DOC_ID' }),
    __metadata("design:type", Number)
], SeguimientoEntity.prototype, "documentoId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'BUZON_ID_ORIGEN' }),
    __metadata("design:type", Number)
], SeguimientoEntity.prototype, "buzonIdOrigen", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'BUZON_ID_DESTINO' }),
    __metadata("design:type", Number)
], SeguimientoEntity.prototype, "buzonIdDestino", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'BUZON_ID_ACTUAL' }),
    __metadata("design:type", Number)
], SeguimientoEntity.prototype, "buzonIdActual", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.BuzonEntity, (buzonOrigen) => buzonOrigen.listaSeguimientoOrigen),
    (0, typeorm_1.JoinColumn)({ name: 'BUZON_ID_ORIGEN' }),
    __metadata("design:type", _1.BuzonEntity)
], SeguimientoEntity.prototype, "buzonOrigen", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.BuzonEntity, (buzonDestino) => buzonDestino.listaSeguimientoDestino),
    (0, typeorm_1.JoinColumn)({ name: 'BUZON_ID_DESTINO' }),
    __metadata("design:type", _1.BuzonEntity)
], SeguimientoEntity.prototype, "buzonDestino", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.BuzonEntity, (buzonActual) => buzonActual.listaSeguimientoActual),
    (0, typeorm_1.JoinColumn)({ name: 'BUZON_ID_ACTUAL' }),
    __metadata("design:type", _1.BuzonEntity)
], SeguimientoEntity.prototype, "buzonActual", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.DocumentoEntity, (documento) => documento.listaSeguimiento),
    (0, typeorm_1.JoinColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", _1.DocumentoEntity)
], SeguimientoEntity.prototype, "documento", void 0);
SeguimientoEntity = __decorate([
    (0, typeorm_1.Entity)('SEGUIMIENTO', { schema: 'correspondencia' })
], SeguimientoEntity);
exports.SeguimientoEntity = SeguimientoEntity;
//# sourceMappingURL=seguimiento.entity.js.map