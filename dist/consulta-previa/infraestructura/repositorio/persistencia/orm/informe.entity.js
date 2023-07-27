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
exports.InformeEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const tramite_entity_1 = require("./tramite.entity");
const sujeto_identificado_entity_1 = require("./sujeto-identificado.entity");
let InformeEntity = class InformeEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idinforme' }),
    __metadata("design:type", Number)
], InformeEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'fk_idtramite' }),
    __metadata("design:type", Number)
], InformeEntity.prototype, "fk_idTramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'correlativo' }),
    __metadata("design:type", String)
], InformeEntity.prototype, "correlativo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'referencia' }),
    __metadata("design:type", String)
], InformeEntity.prototype, "referencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'informepdf' }),
    __metadata("design:type", String)
], InformeEntity.prototype, "informePdf", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'asunto' }),
    __metadata("design:type", String)
], InformeEntity.prototype, "asunto", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'flujo' }),
    __metadata("design:type", String)
], InformeEntity.prototype, "flujo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tramite_entity_1.TramiteEntity, (tramite) => tramite.listaInforme),
    (0, typeorm_1.JoinColumn)({ name: 'fk_idtramite' }),
    __metadata("design:type", tramite_entity_1.TramiteEntity)
], InformeEntity.prototype, "tramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [sujeto_identificado_entity_1.SujetoIdentificadoEntity]),
    (0, typeorm_1.OneToMany)(() => sujeto_identificado_entity_1.SujetoIdentificadoEntity, (sujetoidentificado) => sujetoidentificado.informe),
    (0, typeorm_1.JoinColumn)({ name: 'idtramite' }),
    __metadata("design:type", Array)
], InformeEntity.prototype, "listaSujetoIdentificado", void 0);
InformeEntity = __decorate([
    (0, typeorm_1.Entity)('informe', { schema: 'consulta-previa' })
], InformeEntity);
exports.InformeEntity = InformeEntity;
//# sourceMappingURL=informe.entity.js.map