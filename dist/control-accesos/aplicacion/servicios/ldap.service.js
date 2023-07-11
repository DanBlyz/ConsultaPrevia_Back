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
exports.LDAP_SERVICIO_PROVIDER = exports.LdapService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_1 = require("@automapper/nestjs");
const jwt_1 = require("@nestjs/jwt");
const ldapts_1 = require("ldapts");
const persistencia_1 = require("../../dominio/contratos/infraestructura/persistencia");
const servicios_1 = require("../../dominio/contratos/aplicacion/servicios");
const servicios_2 = require("../servicios");
let LdapService = class LdapService {
    constructor(configService, repositorioFactory, mapper, jwtService) {
        this.configService = configService;
        this.repositorioFactory = repositorioFactory;
        this.mapper = mapper;
        this.jwtService = jwtService;
    }
    async iniciarConexionLdap() {
        const url = 'ldap://172.16.170.61:389';
        const bindDN = 'cn=admin,dc=autoridadminera,dc=local';
        const password = 'Usuario123';
        let clienteLdap = new ldapts_1.Client({
            url,
        });
        let isAuthenticated;
        try {
            await clienteLdap.bind(bindDN, password);
            isAuthenticated = true;
        }
        catch (ex) {
            isAuthenticated = false;
        }
        finally {
            await (clienteLdap === null || clienteLdap === void 0 ? void 0 : clienteLdap.unbind());
        }
        return isAuthenticated;
    }
    async validar(nombre, contrasenia) {
        let respuesta = false;
        const clienteLdap = await this.iniciarConexionLdap();
        if (clienteLdap) {
            let respuestaLdap = null;
            if (nombre.indexOf('@') > 0) {
                respuestaLdap = await clienteLdap.search(`ou=${this.configService.get('LDAP_GRUPO_USUARIOS')},${this.configService.get('LDAP_BASE_BIND_DN')}`, {
                    scope: 'sub',
                    filter: `(mail=${nombre})`,
                });
            }
            else {
                respuestaLdap = await clienteLdap.search(`ou=${this.configService.get('LDAP_GRUPO_USUARIOS')},${this.configService.get('LDAP_BASE_BIND_DN')}`, {
                    scope: 'sub',
                    filter: `(uid=${nombre})`,
                });
            }
            if (respuestaLdap.searchEntries.length > 0) {
                try {
                    await clienteLdap.bind(`uid=${respuestaLdap.searchEntries[0].uid},ou=${this.configService.get('LDAP_GRUPO_USUARIOS')},${this.configService.get('LDAP_BASE_BIND_DN')}`, contrasenia);
                    respuesta = true;
                }
                catch (ex) {
                    respuesta = false;
                }
                finally {
                    await (clienteLdap === null || clienteLdap === void 0 ? void 0 : clienteLdap.unbind());
                }
            }
            else {
                await (clienteLdap === null || clienteLdap === void 0 ? void 0 : clienteLdap.unbind());
            }
        }
        return respuesta;
    }
    async obtenerPorUid(uid) {
        let objeto = null;
        const clienteLdap = await this.iniciarConexionLdap();
        if (clienteLdap) {
            objeto = true;
        }
        else {
            objeto = false;
        }
        return objeto;
    }
    async obtenerToken(objetoDto) {
        const cuentaServicio = new servicios_2.CuentaService(this.repositorioFactory, this.mapper, this.jwtService);
        const payload = {
            user_id: '',
            name: '',
            given_name: '',
            family_name: '',
            nickname: '',
            picture: null,
            email: '',
            nonce: '',
            auth: 'LDAP',
            roles: '',
        };
        return await {
            access_token: this.jwtService.sign(payload),
        };
    }
};
LdapService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(persistencia_1.REPOSITORIO_FACTORY)),
    __param(2, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [config_1.ConfigService, Object, Object, jwt_1.JwtService])
], LdapService);
exports.LdapService = LdapService;
exports.LDAP_SERVICIO_PROVIDER = {
    provide: servicios_1.LDAP_SERVICIO,
    useClass: LdapService,
};
//# sourceMappingURL=ldap.service.js.map