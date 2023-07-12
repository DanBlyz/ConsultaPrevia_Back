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
            perfiles_1.AdjuntoProfile,
            perfiles_1.BuzonUsuarioProfile,
            perfiles_1.BuzonProfile,
            perfiles_1.ClasificacionBuzonProfile,
            perfiles_1.ClasificacionProfile,
            perfiles_1.ContactoProfile,
            perfiles_1.ContenidoDetalleProfile,
            perfiles_1.ContenidoProfile,
            perfiles_1.DocumentoDetalleProfile,
            perfiles_1.DocumentoSeguimientoProfile,
            perfiles_1.DocumentoProfile,
            perfiles_1.EtiquetaProfile,
            perfiles_1.NotaProfile,
            perfiles_1.ParticipanteProfile,
            perfiles_1.PersonaProfile,
            perfiles_1.PlantillaProfile,
            perfiles_1.PuestoProfile,
            perfiles_1.SeguimientoProfile,
            perfiles_1.TipoDocumentoProfile,
            perfiles_1.UniOrganizacionalProfile,
            perfiles_1.GrupoProfile,
            perfiles_1.RolProfile,
            perfiles_1.CuentaProfile,
            perfiles_1.RolCuentaProfile,
            perfiles_1.UsuarioProfile,
            perfiles_1.PruebaProfile,
            filtros_1.BuzonFiltroProfile,
            filtros_1.BuzonUsuarioFiltroProfile,
            filtros_1.ClasificacionFiltroProfile,
            filtros_1.ContactoFiltroProfile,
            filtros_1.DocumentoFiltroProfile,
            filtros_1.ParticipanteFiltroProfile,
            filtros_1.PersonaFiltroProfile,
            filtros_1.PlantillaFiltroProfile,
            filtros_1.PuestoFiltroProfile,
            filtros_1.TipoDocumentoFiltroProfile,
            filtros_1.UniOrganizacionalFiltroProfile,
            filtros_1.GrupoFiltroProfile,
            filtros_1.RolFiltroProfile,
            filtros_1.CuentaFiltroProfile,
            filtros_1.UsuarioFiltroProfile,
            filtros_1.PruebaFiltroProfile,
        ],
    })
], MapeoModule);
exports.MapeoModule = MapeoModule;
//# sourceMappingURL=mapeo.module.js.map