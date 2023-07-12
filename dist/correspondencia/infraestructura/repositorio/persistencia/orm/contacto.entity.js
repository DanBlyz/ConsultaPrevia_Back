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
exports.ContactoEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
let ContactoEntity = class ContactoEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'CONT_ID' }),
    __metadata("design:type", Number)
], ContactoEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NOMBRE' }),
    __metadata("design:type", String)
], ContactoEntity.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'PUESTO' }),
    __metadata("design:type", String)
], ContactoEntity.prototype, "puesto", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'UNI_ORGANIZACIONAL' }),
    __metadata("design:type", String)
], ContactoEntity.prototype, "uniOrganizacional", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ENTIDAD' }),
    __metadata("design:type", String)
], ContactoEntity.prototype, "entidad", void 0);
ContactoEntity = __decorate([
    (0, typeorm_1.Entity)('CONTACTO', { schema: 'correspondencia' })
], ContactoEntity);
exports.ContactoEntity = ContactoEntity;
//# sourceMappingURL=contacto.entity.js.map