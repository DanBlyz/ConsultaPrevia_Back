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
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const comun_1 = require("../../comun");
const dominio_1 = require("../dominio");
const infraestructura_1 = require("../infraestructura");
const servicios_1 = require("./servicios");
let AplicacionModule = exports.AplicacionModule = class AplicacionModule {
};
exports.AplicacionModule = AplicacionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_CLAVE'),
                    signOptions: {
                        algorithm: configService.get('JWT_ALGORITMO'),
                        expiresIn: configService.get('JWT_EXPIRACION'),
                        subject: configService.get('JWT_EMISOR'),
                        issuer: configService.get('JWT_PROVEEDOR'),
                        audience: configService.get('JWT_AUDIENCIA'),
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            comun_1.ComunModule,
            dominio_1.DominioModule,
            (0, common_1.forwardRef)(() => infraestructura_1.InfraestructuraModule),
        ],
        exports: [servicios_1.SERVICIO_FACTORY_PROVIDER],
        providers: [
            servicios_1.CUENTA_SERVICIO_PROVIDER,
            servicios_1.GRUPO_SERVICIO_PROVIDER,
            servicios_1.LDAP_SERVICIO_PROVIDER,
            servicios_1.ROL_CUENTA_SERVICIO_PROVIDER,
            servicios_1.ROL_SERVICIO_PROVIDER,
            servicios_1.USUARIO_SERVICIO_PROVIDER,
            servicios_1.SERVICIO_FACTORY_PROVIDER,
        ],
    })
], AplicacionModule);
//# sourceMappingURL=aplicacion.module.js.map