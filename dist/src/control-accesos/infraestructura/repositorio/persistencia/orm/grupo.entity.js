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
exports.GrupoEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const _1 = require(".");
let GrupoEntity = exports.GrupoEntity = class GrupoEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'GRUPO_ID' }),
    __metadata("design:type", Number)
], GrupoEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'CODIGO' }),
    __metadata("design:type", String)
], GrupoEntity.prototype, "codigo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NOMBRE' }),
    __metadata("design:type", String)
], GrupoEntity.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'DESCRIPCION' }),
    __metadata("design:type", String)
], GrupoEntity.prototype, "descripcion", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [_1.RolEntity]),
    (0, typeorm_1.OneToMany)(() => _1.RolEntity, (rol) => rol.grupo),
    (0, typeorm_1.JoinColumn)({ name: 'GRUPO_ID' }),
    __metadata("design:type", Array)
], GrupoEntity.prototype, "listaRol", void 0);
exports.GrupoEntity = GrupoEntity = __decorate([
    (0, typeorm_1.Entity)('GRUPO', { schema: 'control-accesos' })
], GrupoEntity);
//# sourceMappingURL=grupo.entity.js.map