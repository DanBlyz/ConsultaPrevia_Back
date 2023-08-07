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
exports.SujetoIdentificadoEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const informe_entity_1 = require("./informe.entity");
let SujetoIdentificadoEntity = exports.SujetoIdentificadoEntity = class SujetoIdentificadoEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idsujeto' }),
    __metadata("design:type", Number)
], SujetoIdentificadoEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'fk_idinforme', default: null }),
    __metadata("design:type", Number)
], SujetoIdentificadoEntity.prototype, "fk_idInforme", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'comunidad', default: null }),
    __metadata("design:type", String)
], SujetoIdentificadoEntity.prototype, "comunidad", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'autoridad', default: null }),
    __metadata("design:type", String)
], SujetoIdentificadoEntity.prototype, "autoridad", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'telefono', default: 0 }),
    __metadata("design:type", Number)
], SujetoIdentificadoEntity.prototype, "telefono", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [informe_entity_1.InformeEntity]),
    (0, typeorm_1.ManyToOne)(() => informe_entity_1.InformeEntity, (informe) => informe.listaSujetoIdentificado),
    (0, typeorm_1.JoinColumn)({ name: 'fk_idinforme' }),
    __metadata("design:type", informe_entity_1.InformeEntity)
], SujetoIdentificadoEntity.prototype, "informe", void 0);
exports.SujetoIdentificadoEntity = SujetoIdentificadoEntity = __decorate([
    (0, typeorm_1.Entity)('sujetoidentificado', { schema: 'consulta-previa' })
], SujetoIdentificadoEntity);
//# sourceMappingURL=sujeto-identificado.entity.js.map