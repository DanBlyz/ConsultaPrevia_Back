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
let ServicioFactory = class ServicioFactory {
    constructor(adjuntoServicio, buzonUsuarioServicio, buzonServicio, clasificacionBuzonServicio, clasificacionServicio, contactoServicio, contenidoDetalleServicio, contenidoServicio, documentoDetalleServicio, documentoSeguimientoServicio, documentoServicio, etiquetaServicio, hojaRutaServicio, notaServicio, participanteServicio, personaServicio, plantillaServicio, puestoServicio, seguimientoServicio, tipoDocumentoServicio, uniOrganizacionalServicio, grupoServicio, rolServicio, cuentaServicio, rolCuentaServicio, usuarioServicio, pruebaServicio) {
        this.adjuntoServicio = adjuntoServicio;
        this.buzonUsuarioServicio = buzonUsuarioServicio;
        this.buzonServicio = buzonServicio;
        this.clasificacionBuzonServicio = clasificacionBuzonServicio;
        this.clasificacionServicio = clasificacionServicio;
        this.contactoServicio = contactoServicio;
        this.contenidoDetalleServicio = contenidoDetalleServicio;
        this.contenidoServicio = contenidoServicio;
        this.documentoDetalleServicio = documentoDetalleServicio;
        this.documentoSeguimientoServicio = documentoSeguimientoServicio;
        this.documentoServicio = documentoServicio;
        this.etiquetaServicio = etiquetaServicio;
        this.hojaRutaServicio = hojaRutaServicio;
        this.notaServicio = notaServicio;
        this.participanteServicio = participanteServicio;
        this.personaServicio = personaServicio;
        this.plantillaServicio = plantillaServicio;
        this.puestoServicio = puestoServicio;
        this.seguimientoServicio = seguimientoServicio;
        this.tipoDocumentoServicio = tipoDocumentoServicio;
        this.uniOrganizacionalServicio = uniOrganizacionalServicio;
        this.grupoServicio = grupoServicio;
        this.rolServicio = rolServicio;
        this.cuentaServicio = cuentaServicio;
        this.rolCuentaServicio = rolCuentaServicio;
        this.usuarioServicio = usuarioServicio;
        this.pruebaServicio = pruebaServicio;
    }
};
ServicioFactory = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(servicios_1.ADJUNTO_SERVICIO)),
    __param(1, (0, common_1.Inject)(servicios_1.BUZON_USUARIO_SERVICIO)),
    __param(2, (0, common_1.Inject)(servicios_1.BUZON_SERVICIO)),
    __param(3, (0, common_1.Inject)(servicios_1.CLASIFICACION_BUZON_SERVICIO)),
    __param(4, (0, common_1.Inject)(servicios_1.CLASIFICACION_SERVICIO)),
    __param(5, (0, common_1.Inject)(servicios_1.CONTACTO_SERVICIO)),
    __param(6, (0, common_1.Inject)(servicios_1.CONTENIDO_DETALLE_SERVICIO)),
    __param(7, (0, common_1.Inject)(servicios_1.CONTENIDO_SERVICIO)),
    __param(8, (0, common_1.Inject)(servicios_1.DOCUMENTO_DETALLE_SERVICIO)),
    __param(9, (0, common_1.Inject)(servicios_1.DOCUMENTO_SEGUIMIENTO_SERVICIO)),
    __param(10, (0, common_1.Inject)(servicios_1.DOCUMENTO_SERVICIO)),
    __param(11, (0, common_1.Inject)(servicios_1.ETIQUETA_SERVICIO)),
    __param(12, (0, common_1.Inject)(servicios_1.HOJA_RUTA_SERVICIO)),
    __param(13, (0, common_1.Inject)(servicios_1.NOTA_SERVICIO)),
    __param(14, (0, common_1.Inject)(servicios_1.PARTICIPANTE_SERVICIO)),
    __param(15, (0, common_1.Inject)(servicios_1.PERSONA_SERVICIO)),
    __param(16, (0, common_1.Inject)(servicios_1.PLANTILLA_SERVICIO)),
    __param(17, (0, common_1.Inject)(servicios_1.PUESTO_SERVICIO)),
    __param(18, (0, common_1.Inject)(servicios_1.SEGUIMIENTO_SERVICIO)),
    __param(19, (0, common_1.Inject)(servicios_1.TIPO_DOCUMENTO_SERVICIO)),
    __param(20, (0, common_1.Inject)(servicios_1.UNI_ORGANIZACIONAL_SERVICIO)),
    __param(21, (0, common_1.Inject)(servicios_1.GRUPO_SERVICIO)),
    __param(22, (0, common_1.Inject)(servicios_1.ROL_SERVICIO)),
    __param(23, (0, common_1.Inject)(servicios_1.CUENTA_SERVICIO)),
    __param(24, (0, common_1.Inject)(servicios_1.ROL_CUENTA_SERVICIO)),
    __param(25, (0, common_1.Inject)(servicios_1.USUARIO_SERVICIO)),
    __param(26, (0, common_1.Inject)(servicios_1.PRUEBA_SERVICIO)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object])
], ServicioFactory);
exports.ServicioFactory = ServicioFactory;
exports.SERVICIO_FACTORY_PROVIDER = {
    provide: aplicacion_1.SERVICIO_FACTORY,
    useClass: ServicioFactory,
};
//# sourceMappingURL=servicio.factory.js.map