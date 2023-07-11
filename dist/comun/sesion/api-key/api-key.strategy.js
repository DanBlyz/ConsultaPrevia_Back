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
exports.ApiKeyStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const passport_headerapikey_1 = require("passport-headerapikey");
const identidad_1 = require("../../sesion/identidad");
let ApiKeyStrategy = class ApiKeyStrategy extends (0, passport_1.PassportStrategy)(passport_headerapikey_1.default, 'api-key') {
    constructor(configService) {
        super({ header: 'Authorization', prefix: 'Api-Key ' }, true, async (apiKey, done) => {
            if (this.configService.get('API_KEY_APLICACION') &&
                this.configService.get('API_KEY')) {
                const listaApiKeyAplicacion = this.configService
                    .get('API_KEY_APLICACION')
                    .split('|');
                const listaApiKey = this.configService.get('API_KEY').split('|');
                if (listaApiKey.indexOf(apiKey) >= 0) {
                    const identidad = identidad_1.Identidad.getInstance();
                    identidad.usuarioId = 0;
                    identidad.cuenta =
                        listaApiKeyAplicacion[listaApiKey.indexOf(apiKey)] || 'ANONIMO';
                    identidad.roles = null;
                    done(null, true);
                }
            }
            done(new common_1.UnauthorizedException(), null);
        });
        this.configService = configService;
    }
};
ApiKeyStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ApiKeyStrategy);
exports.ApiKeyStrategy = ApiKeyStrategy;
//# sourceMappingURL=api-key.strategy.js.map