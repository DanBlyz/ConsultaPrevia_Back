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
const repositorios_1 = require("./persistencia/repositorios");
let RepositorioFactory = exports.RepositorioFactory = class RepositorioFactory {
    constructor(conexion, httpService, mapper) {
        this.conexion = conexion;
        this.httpService = httpService;
        this.mapper = mapper;
        this.tramiteRepositorio = new repositorios_1.TramiteRepository(this.conexion, this.mapper);
        this.informeRepositorio = new repositorios_1.InformeRepository(this.conexion, this.mapper);
        this.sujetoIdentificadoRepositorio = new repositorios_1.SujetoIdentificadoRepository(this.conexion, this.mapper);
        this.notificacionRepositorio = new repositorios_1.NotificacionRepository(this.conexion, this.mapper);
        this.reunionRepositorio = new repositorios_1.ReunionRepository(this.conexion, this.mapper);
        this.resolucionRepositorio = new repositorios_1.ResolucionRepository(this.conexion, this.mapper);
        this.actoAdministrativoRepositorio = new repositorios_1.ActoAdministrativoRepository(this.conexion, this.mapper);
        this.pagoCptRepositorio = new repositorios_1.PagoCptRepository(this.conexion, this.mapper);
        this.viajeRepositorio = new repositorios_1.ViajeRepository(this.conexion, this.mapper);
        this.providenciaRepositorio = new repositorios_1.ProvidenciaRepository(this.conexion, this.mapper);
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
exports.RepositorioFactory = RepositorioFactory = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        axios_1.HttpService, Object])
], RepositorioFactory);
exports.REPOSITORIO_FACTORY_PROVIDER = {
    provide: infraestructura_1.REPOSITORIO_FACTORY,
    useClass: RepositorioFactory,
};
//# sourceMappingURL=repositorio.factory.js.map