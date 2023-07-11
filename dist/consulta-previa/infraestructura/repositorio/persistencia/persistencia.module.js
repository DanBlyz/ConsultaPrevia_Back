"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistenciaModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comun_1 = require("../../../../comun");
const dominio_1 = require("../../../dominio");
const auditoria_subscriber_1 = require("./orm/base/auditoria.subscriber");
const orm_1 = require("./orm");
const repositorios_1 = require("./repositorios");
const personal_1 = require("../cliente/personal");
let PersistenciaModule = class PersistenciaModule {
};
PersistenciaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([
                orm_1.TramiteEntity,
                orm_1.InformeEntity,
                orm_1.SujetoIdentificadoEntity,
                orm_1.NotificacionEntity,
                orm_1.ReunionEntity,
                orm_1.ResolucionEntity,
                orm_1.PagoCptEntity,
                orm_1.ViajeEntity,
            ]),
            comun_1.ComunModule,
            dominio_1.DominioModule,
        ],
        providers: [
            auditoria_subscriber_1.AuditoriaSubscriber,
            repositorios_1.TRAMITE_REPOSITORIO_PROVIDER,
            repositorios_1.INFORME_REPOSITORIO_PROVIDER,
            repositorios_1.SUJETO_IDENTIFICADO_REPOSITORIO_PROVIDER,
            repositorios_1.NOTIFICACION_REPOSITORIO_PROVIDER,
            repositorios_1.REUNION_REPOSITORIO_PROVIDER,
            repositorios_1.RESOLUCION_REPOSITORIO_PROVIDER,
            repositorios_1.PAGO_CPT_REPOSITORIO_PROVIDER,
            repositorios_1.VIAJE_REPOSITORIO_PROVIDER,
            personal_1.PUESTO_REPOSITORIO_PROVIDER,
            personal_1.UNI_ORGANIZACIONAL_REPOSITORIO_PROVIDER,
        ],
    })
], PersistenciaModule);
exports.PersistenciaModule = PersistenciaModule;
//# sourceMappingURL=persistencia.module.js.map