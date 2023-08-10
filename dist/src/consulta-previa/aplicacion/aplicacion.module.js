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
let AplicacionModule = class AplicacionModule {
};
AplicacionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            comun_1.ComunModule,
            dominio_1.DominioModule,
            (0, common_1.forwardRef)(() => infraestructura_1.InfraestructuraModule),
        ],
        exports: [servicios_1.SERVICIO_FACTORY_PROVIDER],
        providers: [
            servicios_1.SERVICIO_FACTORY_PROVIDER,
            servicios_1.TRAMITE_SERVICIO_PROVIDER,
            servicios_1.INFORME_SERVICIO_PROVIDER,
            servicios_1.SUJETO_IDENTIFICADO_SERVICIO_PROVIDER,
            servicios_1.NOTIFICACION_SERVICIO_PROVIDER,
            servicios_1.REUNION_SERVICIO_PROVIDER,
            servicios_1.RESOLUCION_SERVICIO_PROVIDER,
            servicios_1.ACTOS_ADMINISTRATIVOS_SERVICIO_PROVIDER,
            servicios_1.PAGO_CPT_SERVICIO_PROVIDER,
            servicios_1.VIAJE_SERVICIO_PROVIDER,
            servicios_1.PROVIDENCIA_SERVICIO_PROVIDER,
        ],
    })
], AplicacionModule);
exports.AplicacionModule = AplicacionModule;
//# sourceMappingURL=aplicacion.module.js.map