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
exports.INFO_LABORAL_SERVICIO_PROVIDER = exports.InfoLaboralService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_1 = require("@automapper/nestjs");
const transferencia_1 = require("../../../comun/transferencia");
const persistencia_1 = require("../../dominio/contratos/infraestructura/persistencia");
const servicios_1 = require("../../dominio/contratos/aplicacion/servicios");
const entidades_1 = require("../../dominio/entidades");
const transferencia_2 = require("../../dominio/transferencia");
let InfoLaboralService = exports.InfoLaboralService = class InfoLaboralService {
    constructor(repositorioFactory, mapper) {
        this.repositorioFactory = repositorioFactory;
        this.mapper = mapper;
    }
    async validar(operacion, objetoDto, errores = []) {
        switch (operacion) {
            case 'guardar': {
                const filtro = new entidades_1.InfoLaboral();
                filtro.correoInstitucional = objetoDto.correoInstitucional;
                const infoLaboralBD = await this.repositorioFactory.infoLaboralRepositorio.obtenerObjetoPor(filtro);
                if (infoLaboralBD) {
                    errores.push('El registro ya existe.');
                    return false;
                }
            }
            case 'modificar': {
                if (!objetoDto) {
                    errores.push('El objeto no puede ser nulo.');
                    return false;
                }
            }
            case 'eliminar': {
                return true;
            }
        }
    }
    async buscar(filtroDto, pagina, cantidad, ordenarPor = 'id', orden = 'DESC') {
        const respuesta = await this.repositorioFactory.infoLaboralRepositorio.obtenerPor(filtroDto, pagina, cantidad, ordenarPor, orden);
        return new transferencia_1.ListaPaginadaDto(this.mapper.mapArray(respuesta.lista, entidades_1.InfoLaboral, transferencia_2.InfoLaboralDto), respuesta.totalRegistros);
    }
    async obtenerPorId(id) {
        const objeto = await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(id);
        if (objeto === undefined)
            return null;
        return this.mapper.map(objeto, entidades_1.InfoLaboral, transferencia_2.InfoLaboralDto);
    }
    async guardar(objetoDto) {
        const errores = [];
        const validacion = await this.validar('guardar', objetoDto, errores);
        if (!validacion) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, errores[0], null);
        }
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.InfoLaboralCreacionDto, entidades_1.InfoLaboral);
            await this.repositorioFactory.infoLaboralRepositorio.guardar(objeto, transaccion);
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha guardado con éxito.', this.mapper.map(objeto, entidades_1.InfoLaboral, transferencia_2.InfoLaboralDto));
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
        const errores = [];
        const validacion = await this.validar('modificar', objetoDto, errores);
        if (!validacion) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, errores[0], null);
        }
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.InfoLaboralModificacionDto, entidades_1.InfoLaboral);
            await this.repositorioFactory.infoLaboralRepositorio.modificar(id, objeto, transaccion);
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha modificado con éxito.', objeto);
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
        const objeto = await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(id);
        if (!objeto) {
            return new transferencia_1.RespuestaDto(transferencia_1.TipoRespuesta.Error, 'El registro no existe.');
        }
        const errores = [];
        const validacion = await this.validar('eliminar', objeto, errores);
        if (!validacion) {
            return new transferencia_1.RespuestaDto(transferencia_1.TipoRespuesta.Error, errores[0]);
        }
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            await this.repositorioFactory.infoLaboralRepositorio.eliminar(id, transaccion, false);
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
exports.InfoLaboralService = InfoLaboralService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(persistencia_1.REPOSITORIO_FACTORY)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [Object, Object])
], InfoLaboralService);
exports.INFO_LABORAL_SERVICIO_PROVIDER = {
    provide: servicios_1.INFO_LABORAL_SERVICIO,
    useClass: InfoLaboralService,
};
//# sourceMappingURL=info-laboral.service.js.map