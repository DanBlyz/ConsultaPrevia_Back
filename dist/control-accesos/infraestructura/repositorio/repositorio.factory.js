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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const nestjs_1 = require("@automapper/nestjs");
const persistencia_1 = require("../../dominio/contratos/infraestructura/persistencia");
const repositorios_1 = require("./persistencia/repositorios");
let RepositorioFactory = class RepositorioFactory {
    constructor(conexion, mapper) {
        this.conexion = conexion;
        this.mapper = mapper;
        this.cuentaRepositorio = new repositorios_1.CuentaRepository(this.conexion, this.mapper);
        this.grupoRepositorio = new repositorios_1.GrupoRepository(this.conexion, this.mapper);
        this.rolCuentaRepositorio = new repositorios_1.RolCuentaRepository(this.conexion, this.mapper);
        this.rolRepositorio = new repositorios_1.RolRepository(this.conexion, this.mapper);
        this.usuarioRepositorio = new repositorios_1.UsuarioRepository(this.conexion, this.mapper);
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
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_1.Connection, Object])
], RepositorioFactory);
exports.RepositorioFactory = RepositorioFactory;
exports.REPOSITORIO_FACTORY_PROVIDER = {
    provide: persistencia_1.REPOSITORIO_FACTORY,
    useClass: RepositorioFactory,
};
//# sourceMappingURL=repositorio.factory.js.map