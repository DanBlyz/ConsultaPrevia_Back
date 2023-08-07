"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplicacionModule = void 0;
const common_1 = require("@nestjs/common");
const comun_1 = require("../../comun");
const dominio_1 = require("../dominio");
const infraestructura_1 = require("../infraestructura");
const servicios_1 = require("./servicios");
let AplicacionModule = exports.AplicacionModule = class AplicacionModule {
};
exports.AplicacionModule = AplicacionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            comun_1.ComunModule,
            dominio_1.DominioModule,
            (0, common_1.forwardRef)(() => infraestructura_1.InfraestructuraModule),
        ],
        exports: [servicios_1.SERVICIO_FACTORY_PROVIDER],
        providers: [
            servicios_1.FOTOGRAFIA_SERVICIO_PROVIDER,
            servicios_1.INFO_LABORAL_SERVICIO_PROVIDER,
            servicios_1.PARAMETRO_SERVICIO_PROVIDER,
            servicios_1.PERSONA_SERVICIO_PROVIDER,
            servicios_1.PUESTO_SERVICIO_PROVIDER,
            servicios_1.PUESTO_PERSONA_SERVICIO_PROVIDER,
            servicios_1.UNI_ORGANIZACIONAL_SERVICIO_PROVIDER,
            servicios_1.SERVICIO_FACTORY_PROVIDER,
        ],
    })
], AplicacionModule);
//# sourceMappingURL=aplicacion.module.js.map