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
exports.REPOSITORIO_FACTORY_PROVIDER = exports.RepositorioFactory = void 0;
const nestjs_1 = require("@automapper/nestjs");
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const infraestructura_1 = require("../../dominio/contratos/infraestructura");
const personal_1 = require("./cliente/personal");
const repositorios_1 = require("./persistencia/repositorios");
let RepositorioFactory = class RepositorioFactory {
    constructor(conexion, httpService, mapper) {
        this.conexion = conexion;
        this.httpService = httpService;
        this.mapper = mapper;
        this.adjuntoRepositorio = new repositorios_1.AdjuntoRepository(this.conexion, this.mapper);
        this.buzonUsuarioRepositorio = new repositorios_1.BuzonUsuarioRepository(this.conexion, this.mapper);
        this.buzonRepositorio = new repositorios_1.BuzonRepository(this.conexion, this.mapper);
        this.clasificacionBuzonRepositorio = new repositorios_1.ClasificacionBuzonRepository(this.conexion, this.mapper);
        this.clasificacionRepositorio = new repositorios_1.ClasificacionRepository(this.conexion, this.mapper);
        this.contactoRepositorio = new repositorios_1.ContactoRepository(this.conexion, this.mapper);
        this.contenidoDetalleRepositorio = new repositorios_1.ContenidoDetalleRepository(this.conexion, this.mapper);
        this.contenidoRepositorio = new repositorios_1.ContenidoRepository(this.conexion, this.mapper);
        this.documentoDetalleRepositorio = new repositorios_1.DocumentoDetalleRepository(this.conexion, this.mapper);
        this.documentoSeguimientoRepositorio = new repositorios_1.DocumentoSeguimientoRepository(this.conexion, this.mapper);
        this.documentoRepositorio = new repositorios_1.DocumentoRepository(this.conexion, this.mapper);
        this.etiquetaRepositorio = new repositorios_1.EtiquetaRepository(this.conexion, this.mapper);
        this.hojaRutaRepositorio = new repositorios_1.HojaRutaRepository(this.conexion, this.mapper);
        this.notaRepositorio = new repositorios_1.NotaRepository(this.conexion, this.mapper);
        this.participanteRepositorio = new repositorios_1.ParticipanteRepository(this.conexion, this.mapper);
        this.personaRepositorio = new personal_1.PersonaRepositorio(this.httpService);
        this.plantillaRepositorio = new repositorios_1.PlantillaRepository(this.conexion, this.mapper);
        this.puestoRepositorio = new personal_1.PuestoRepositorio(this.httpService);
        this.seguimientoRepositorio = new repositorios_1.SeguimientoRepository(this.conexion, this.mapper);
        this.tipoDocumentoRepositorio = new repositorios_1.TipoDocumentoRepository(this.conexion, this.mapper);
        this.grupoRepositorio = new repositorios_1.GrupoRepository(this.conexion, this.mapper);
        this.rolRepositorio = new repositorios_1.RolRepository(this.conexion, this.mapper);
        this.cuentaRepositorio = new repositorios_1.CuentaRepository(this.conexion, this.mapper);
        this.rolCuentaRepositorio = new repositorios_1.RolCuentaRepository(this.conexion, this.mapper);
        this.usuarioRepositorio = new repositorios_1.UsuarioRepository(this.conexion, this.mapper);
        this.uniOrganizacionalRepositorio = new personal_1.UniOrganizacionalRepositorio(this.httpService);
        this.pruebaRepositorio = new repositorios_1.PruebaRepository(this.conexion, this.mapper);
    }
    async iniciarTransaccion() {
        const transaccion = this.conexion.createQueryRunner();
        transaccion.startTransaction();
        return transaccion;
    }
    async confirmar(transaccion) {
        await transaccion.commitTransaction();
    }
    async revertir(transaccion) {
        await transaccion.rollbackTransaction();
    }
    async liberar(transaccion) {
        await transaccion.release();
    }
    static registrarError(instancia, error) {
        const logger = new common_1.Logger(instancia);
        logger.error(error);
    }
};
RepositorioFactory = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        axios_1.HttpService, Object])
], RepositorioFactory);
exports.RepositorioFactory = RepositorioFactory;
exports.REPOSITORIO_FACTORY_PROVIDER = {
    provide: infraestructura_1.REPOSITORIO_FACTORY,
    useClass: RepositorioFactory,
};
//# sourceMappingURL=repositorio.factory.js.map