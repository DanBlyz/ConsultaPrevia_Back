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
                orm_1.AdjuntoEntity,
                orm_1.BuzonUsuarioEntity,
                orm_1.BuzonEntity,
                orm_1.ClasificacionBuzonEntity,
                orm_1.ClasificacionEntity,
                orm_1.ContactoEntity,
                orm_1.ContenidoDetalleEntity,
                orm_1.ContenidoEntity,
                orm_1.DocumentoDetalleEntity,
                orm_1.DocumentoSeguimientoEntity,
                orm_1.DocumentoEntity,
                orm_1.EtiquetaEntity,
                orm_1.HojaRutaEntity,
                orm_1.NotaEntity,
                orm_1.ParticipanteEntity,
                orm_1.PlantillaEntity,
                orm_1.SeguimientoEntity,
                orm_1.TipoDocumentoEntity,
                orm_1.GrupoEntity,
                orm_1.RolEntity,
                orm_1.CuentaEntity,
                orm_1.RolCuentaEntity,
                orm_1.UsuarioEntity,
                orm_1.PruebaEntity,
            ]),
            comun_1.ComunModule,
            dominio_1.DominioModule,
        ],
        providers: [
            auditoria_subscriber_1.AuditoriaSubscriber,
            repositorios_1.ADJUNTO_REPOSITORIO_PROVIDER,
            repositorios_1.BUZON_USUARIO_REPOSITORIO_PROVIDER,
            repositorios_1.BUZON_REPOSITORIO_PROVIDER,
            repositorios_1.CLASIFICACION_BUZON_REPOSITORIO_PROVIDER,
            repositorios_1.CLASIFICACION_REPOSITORIO_PROVIDER,
            repositorios_1.CONTACTO_REPOSITORIO_PROVIDER,
            repositorios_1.CONTENIDO_DETALLE_REPOSITORIO_PROVIDER,
            repositorios_1.CONTENIDO_REPOSITORIO_PROVIDER,
            repositorios_1.DOCUMENTO_DETALLE_REPOSITORIO_PROVIDER,
            repositorios_1.DOCUMENTO_SEGUIMIENTO_REPOSITORIO_PROVIDER,
            repositorios_1.DOCUMENTO_REPOSITORIO_PROVIDER,
            repositorios_1.ETIQUETA_REPOSITORIO_PROVIDER,
            repositorios_1.HOJA_RUTA_REPOSITORIO_PROVIDER,
            repositorios_1.NOTA_REPOSITORIO_PROVIDER,
            repositorios_1.PARTICIPANTE_REPOSITORIO_PROVIDER,
            repositorios_1.PARTICIPANTE_REPOSITORIO_PROVIDER,
            repositorios_1.PLANTILLA_REPOSITORIO_PROVIDER,
            personal_1.PUESTO_REPOSITORIO_PROVIDER,
            repositorios_1.SEGUIMIENTO_REPOSITORIO_PROVIDER,
            repositorios_1.TIPO_DOCUMENTO_REPOSITORIO_PROVIDER,
            personal_1.UNI_ORGANIZACIONAL_REPOSITORIO_PROVIDER,
            repositorios_1.GRUPO_REPOSITORIO_PROVIDER,
            repositorios_1.ROL_REPOSITORIO_PROVIDER,
            repositorios_1.CUENTA_REPOSITORIO_PROVIDER,
            repositorios_1.ROL_CUENTA_REPOSITORIO_PROVIDER,
            repositorios_1.USUARIO_REPOSITORIO_PROVIDER,
            repositorios_1.PRUEBA_REPOSITORIO_PROVIDER,
        ],
    })
], PersistenciaModule);
exports.PersistenciaModule = PersistenciaModule;
//# sourceMappingURL=persistencia.module.js.map