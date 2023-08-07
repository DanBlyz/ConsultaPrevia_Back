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
let PersistenciaModule = exports.PersistenciaModule = class PersistenciaModule {
};
exports.PersistenciaModule = PersistenciaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                orm_1.FotografiaEntity,
                orm_1.InfoLaboralEntity,
                orm_1.ParametroEntity,
                orm_1.PersonaEntity,
                orm_1.PuestoPersonaEntity,
                orm_1.PuestoEntity,
                orm_1.UniOrganizacionalEntity,
            ]),
            comun_1.ComunModule,
            dominio_1.DominioModule,
        ],
        providers: [
            auditoria_subscriber_1.AuditoriaSubscriber,
            repositorios_1.INFO_LABORAL_REPOSITORIO_PROVIDER,
            repositorios_1.PARAMETRO_REPOSITORIO_PROVIDER,
            repositorios_1.PERSONA_REPOSITORIO_PROVIDER,
            repositorios_1.PUESTO_REPOSITORIO_PROVIDER,
            repositorios_1.PUESTO_PERSONA_REPOSITORIO_PROVIDER,
            repositorios_1.UNI_ORGANIZACIONAL_REPOSITORIO_PROVIDER,
        ],
    })
], PersistenciaModule);
//# sourceMappingURL=persistencia.module.js.map