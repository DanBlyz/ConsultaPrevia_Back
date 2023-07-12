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
exports.FotografiaEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const _1 = require(".");
let FotografiaEntity = class FotografiaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryColumn)({ name: 'PERS_ID' }),
    __metadata("design:type", Number)
], FotografiaEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ARCHIVO' }),
    __metadata("design:type", String)
], FotografiaEntity.prototype, "archivo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TIPO_MIME' }),
    __metadata("design:type", String)
], FotografiaEntity.prototype, "tipoMime", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'EXTENSION' }),
    __metadata("design:type", String)
], FotografiaEntity.prototype, "extension", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TAMANIO' }),
    __metadata("design:type", Number)
], FotografiaEntity.prototype, "tamanio", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => _1.PersonaEntity, (persona) => persona.fotografia),
    (0, typeorm_1.JoinColumn)({ name: 'PERS_ID' }),
    __metadata("design:type", _1.PersonaEntity)
], FotografiaEntity.prototype, "persona", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '_USU_CREADOR' }),
    __metadata("design:type", String)
], FotografiaEntity.prototype, "_usuCreador", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '_INST_CREACION', type: 'timestamptz' }),
    __metadata("design:type", Date)
], FotografiaEntity.prototype, "_instCreacion", void 0);
FotografiaEntity = __decorate([
    (0, typeorm_1.Entity)('FOTOGRAFIA', { schema: 'personal' })
], FotografiaEntity);
exports.FotografiaEntity = FotografiaEntity;
//# sourceMappingURL=fotografia.entity.js.map