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
let MapeoModule = class MapeoModule {
};
MapeoModule = __decorate([
    (0, common_1.Module)({
        providers: [
            perfiles_1.TramiteProfile,
            perfiles_1.InformeProfile,
            perfiles_1.SujetoIdentificadoProfile,
            perfiles_1.NotificacionProfile,
            perfiles_1.ReunionProfile,
            perfiles_1.ResolucionProfile,
            perfiles_1.ActoAdministrativoProfile,
            perfiles_1.PagoCptProfile,
            perfiles_1.ViajeProfile,
            perfiles_1.ProvidenciaProfile,
            filtros_1.TramiteFiltroProfile,
            filtros_1.InformeFiltroProfile,
            filtros_1.SujetoIdentificadoFiltroProfile,
            filtros_1.NotificacionFiltroProfile,
            filtros_1.ReunionFiltroProfile,
            filtros_1.ResolucionFiltroProfile,
            filtros_1.ActoAdministrativoFiltroProfile,
            filtros_1.PagoCptFiltroProfile,
            filtros_1.ViajeFiltroProfile,
            filtros_1.ProvidenciaFiltroProfile,
        ],
    })
], MapeoModule);
exports.MapeoModule = MapeoModule;
//# sourceMappingURL=mapeo.module.js.map