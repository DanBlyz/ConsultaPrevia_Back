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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtiquetaProfile = void 0;
const nestjs_1 = require("@automapper/nestjs");
const core_1 = require("@automapper/core");
const common_1 = require("@nestjs/common");
const entidades_1 = require("../../../dominio/entidades");
const transferencia_1 = require("../../../dominio/transferencia");
const orm_1 = require("../../repositorio/persistencia/orm");
let EtiquetaProfile = class EtiquetaProfile extends nestjs_1.AutomapperProfile {
    constructor(mapper) {
        super(mapper);
    }
    get profile() {
        return (mapper) => {
            (0, core_1.createMap)(mapper, entidades_1.Etiqueta, transferencia_1.EtiquetaDto);
            (0, core_1.createMap)(mapper, transferencia_1.EtiquetaCreacionDto, entidades_1.Etiqueta);
            (0, core_1.createMap)(mapper, transferencia_1.EtiquetaModificacionDto, entidades_1.Etiqueta);
            (0, core_1.createMap)(mapper, entidades_1.Etiqueta, orm_1.EtiquetaEntity);
            (0, core_1.createMap)(mapper, orm_1.EtiquetaEntity, entidades_1.Etiqueta, (0, core_1.forMember)((destino) => destino.sePuedeModificar, (0, core_1.fromValue)(true)), (0, core_1.forMember)((destino) => destino.sePuedeEliminar, (0, core_1.fromValue)(true)));
        };
    }
};
EtiquetaProfile = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [Object])
], EtiquetaProfile);
exports.EtiquetaProfile = EtiquetaProfile;
//# sourceMappingURL=etiqueta.profile.js.map