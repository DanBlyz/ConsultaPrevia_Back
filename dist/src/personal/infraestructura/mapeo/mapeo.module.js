"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapeoModule = void 0;
const common_1 = require("@nestjs/common");
const perfiles_1 = require("./perfiles");
const filtros_1 = require("./perfiles/filtros");
let MapeoModule = exports.MapeoModule = class MapeoModule {
};
exports.MapeoModule = MapeoModule = __decorate([
    (0, common_1.Module)({
        providers: [
            perfiles_1.FotografiaProfile,
            perfiles_1.InfoLaboralProfile,
            perfiles_1.ParametroProfile,
            perfiles_1.PersonaProfile,
            perfiles_1.PuestoPersonaProfile,
            perfiles_1.PuestoProfile,
            perfiles_1.UniOrganizacionalProfile,
            filtros_1.ParametroFiltroProfile,
            filtros_1.PersonaFiltroProfile,
            filtros_1.PuestoFiltroProfile,
            filtros_1.PuestoPersonaFiltroProfile,
            filtros_1.UniOrganizacionalFiltroProfile,
        ],
    })
], MapeoModule);
//# sourceMappingURL=mapeo.module.js.map