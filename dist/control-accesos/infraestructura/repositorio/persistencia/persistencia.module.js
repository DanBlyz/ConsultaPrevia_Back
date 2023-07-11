"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistenciaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comun_1 = require("../../../../comun");
const dominio_1 = require("../../../dominio");
const orm_1 = require("./orm");
const auditoria_subscriber_1 = require("./orm/base/auditoria.subscriber");
const repositorios_1 = require("./repositorios");
let PersistenciaModule = class PersistenciaModule {
};
PersistenciaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                orm_1.CuentaEntity,
                orm_1.GrupoEntity,
                orm_1.RolCuentaEntity,
                orm_1.RolEntity,
                orm_1.UsuarioEntity,
            ]),
            comun_1.ComunModule,
            dominio_1.DominioModule,
        ],
        providers: [
            auditoria_subscriber_1.AuditoriaSubscriber,
            repositorios_1.CUENTA_REPOSITORIO_PROVIDER,
            repositorios_1.GRUPO_REPOSITORIO_PROVIDER,
            repositorios_1.ROL_CUENTA_REPOSITORIO_PROVIDER,
            repositorios_1.ROL_REPOSITORIO_PROVIDER,
            repositorios_1.USUARIO_REPOSITORIO_PROVIDER,
        ],
    })
], PersistenciaModule);
exports.PersistenciaModule = PersistenciaModule;
//# sourceMappingURL=persistencia.module.js.map