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
exports.PUESTO_SERVICIO_PROVIDER = exports.PuestoService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_1 = require("@automapper/nestjs");
const transferencia_1 = require("../../../comun/transferencia");
const infraestructura_1 = require("../../dominio/contratos/infraestructura");
const servicios_1 = require("../../dominio/contratos/aplicacion/servicios");
const entidades_1 = require("../../dominio/entidades");
const filtros_1 = require("../../dominio/entidades/filtros");
const transferencia_2 = require("../../dominio/transferencia");
const filtros_2 = require("../../dominio/transferencia/filtros");
let PuestoService = class PuestoService {
    constructor(repositorioFactory, mapper) {
        this.repositorioFactory = repositorioFactory;
        this.mapper = mapper;
    }
    async buscar(filtroDto, pagina, cantidad, ordenarPor = 'id', orden = 'DESC') {
        const respuesta = await this.repositorioFactory.puestoRepositorio.obtenerPor(this.mapper.map(filtroDto, filtros_2.PuestoFiltroDto, filtros_1.PuestoFiltro), pagina, cantidad, ordenarPor, orden);
        return new transferencia_1.ListaPaginadaDto(this.mapper.mapArray(respuesta.lista, entidades_1.Puesto, transferencia_2.PuestoDto), respuesta.totalRegistros);
    }
    async obtenerPorId(id) {
        const objeto = await this.repositorioFactory.puestoRepositorio.obtenerPorId(id);
        if (objeto === undefined)
            return null;
        return this.mapper.map(objeto, entidades_1.Puesto, transferencia_2.PuestoDto);
    }
};
PuestoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(infraestructura_1.REPOSITORIO_FACTORY)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [Object, Object])
], PuestoService);
exports.PuestoService = PuestoService;
exports.PUESTO_SERVICIO_PROVIDER = {
    provide: servicios_1.PUESTO_SERVICIO,
    useClass: PuestoService,
};
//# sourceMappingURL=puesto.service.js.map