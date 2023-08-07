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
exports.SERVICIO_FACTORY_PROVIDER = exports.ServicioFactory = void 0;
const common_1 = require("@nestjs/common");
const aplicacion_1 = require("../../dominio/contratos/aplicacion");
const servicios_1 = require("../../dominio/contratos/aplicacion/servicios");
const servicios_2 = require("../../dominio/contratos/aplicacion/servicios");
let ServicioFactory = exports.ServicioFactory = class ServicioFactory {
    constructor(fotografiaServicio, infoLaboralServicio, parametroServicio, personaServicio, puestoServicio, puestoPersonaServicio, uniOrganizacionalServicio) {
        this.fotografiaServicio = fotografiaServicio;
        this.infoLaboralServicio = infoLaboralServicio;
        this.parametroServicio = parametroServicio;
        this.personaServicio = personaServicio;
        this.puestoServicio = puestoServicio;
        this.puestoPersonaServicio = puestoPersonaServicio;
        this.uniOrganizacionalServicio = uniOrganizacionalServicio;
    }
};
exports.ServicioFactory = ServicioFactory = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(servicios_2.FOTOGRAFIA_SERVICIO)),
    __param(1, (0, common_1.Inject)(servicios_1.INFO_LABORAL_SERVICIO)),
    __param(2, (0, common_1.Inject)(servicios_2.PARAMETRO_SERVICIO)),
    __param(3, (0, common_1.Inject)(servicios_2.PERSONA_SERVICIO)),
    __param(4, (0, common_1.Inject)(servicios_2.PUESTO_SERVICIO)),
    __param(5, (0, common_1.Inject)(servicios_2.PUESTO_PERSONA_SERVICIO)),
    __param(6, (0, common_1.Inject)(servicios_2.UNI_ORGANIZACIONAL_SERVICIO)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object])
], ServicioFactory);
exports.SERVICIO_FACTORY_PROVIDER = {
    provide: aplicacion_1.SERVICIO_FACTORY,
    useClass: ServicioFactory,
};
//# sourceMappingURL=servicio.factory.js.map