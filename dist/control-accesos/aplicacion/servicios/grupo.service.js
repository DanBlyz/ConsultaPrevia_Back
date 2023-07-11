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
exports.GRUPO_SERVICIO_PROVIDER = exports.GrupoService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_1 = require("@automapper/nestjs");
const transferencia_1 = require("../../../comun/transferencia");
const persistencia_1 = require("../../dominio/contratos/infraestructura/persistencia");
const servicios_1 = require("../../dominio/contratos/aplicacion/servicios");
const entidades_1 = require("../../dominio/entidades");
const filtros_1 = require("../../dominio/entidades/filtros");
const transferencia_2 = require("../../dominio/transferencia");
const filtros_2 = require("../../dominio/transferencia/filtros");
let GrupoService = class GrupoService {
    constructor(repositorioFactory, mapper) {
        this.repositorioFactory = repositorioFactory;
        this.mapper = mapper;
    }
    async buscar(filtroDto, pagina, cantidad) {
        const respuesta = await this.repositorioFactory.grupoRepositorio.obtenerPor(this.mapper.map(filtroDto, filtros_2.GrupoFiltroDto, filtros_1.GrupoFiltro), pagina, cantidad);
        return new transferencia_1.ListaPaginadaDto(this.mapper.mapArray(respuesta.lista, entidades_1.Grupo, transferencia_2.GrupoDto), respuesta.totalRegistros);
    }
    async obtenerPorId(id) {
        const objeto = await this.repositorioFactory.grupoRepositorio.obtenerPorId(id);
        if (objeto === undefined)
            return null;
        return this.mapper.map(objeto, entidades_1.Grupo, transferencia_2.GrupoDto);
    }
    async guardar(objetoDto) {
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.GrupoCreacionDto, entidades_1.Grupo);
            const id = await this.repositorioFactory.grupoRepositorio.guardar(objeto, transaccion);
            if (id == 0) {
                await this.repositorioFactory.liberar(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido guardar.', null);
            }
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha guardado con éxito.', this.mapper.map(objeto, entidades_1.Grupo, transferencia_2.GrupoDto));
        }
        catch (error) {
            await this.repositorioFactory.revertir(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Excepcion, error.toString(), null);
        }
        finally {
            await this.repositorioFactory.liberar(transaccion);
        }
    }
    async modificar(id, objetoDto) {
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.GrupoModificacionDto, entidades_1.Grupo);
            const operacion = await this.repositorioFactory.grupoRepositorio.modificar(id, objeto, transaccion);
            if (!operacion) {
                await this.repositorioFactory.liberar(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
            }
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha modificado con éxito.', this.mapper.map(objeto, entidades_1.Grupo, transferencia_2.GrupoDto));
        }
        catch (error) {
            await this.repositorioFactory.revertir(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Excepcion, error.toString(), null);
        }
        finally {
            await this.repositorioFactory.liberar(transaccion);
        }
    }
    async eliminar(id) {
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const operacion = await this.repositorioFactory.grupoRepositorio.eliminar(id, transaccion, false);
            if (!operacion) {
                await this.repositorioFactory.liberar(transaccion);
                return new transferencia_1.RespuestaDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido eliminar.');
            }
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha eliminado con éxito.');
        }
        catch (error) {
            await this.repositorioFactory.revertir(transaccion);
            return new transferencia_1.RespuestaDto(transferencia_1.TipoRespuesta.Excepcion, error.toString());
        }
        finally {
            await this.repositorioFactory.liberar(transaccion);
        }
    }
};
GrupoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(persistencia_1.REPOSITORIO_FACTORY)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [Object, Object])
], GrupoService);
exports.GrupoService = GrupoService;
exports.GRUPO_SERVICIO_PROVIDER = {
    provide: servicios_1.GRUPO_SERVICIO,
    useClass: GrupoService,
};
//# sourceMappingURL=grupo.service.js.map