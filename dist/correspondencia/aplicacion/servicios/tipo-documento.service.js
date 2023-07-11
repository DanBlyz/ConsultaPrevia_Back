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
exports.TIPO_DOCUMENTO_SERVICIO_PROVIDER = exports.TipoDocumentoService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_1 = require("@automapper/nestjs");
const transferencia_1 = require("../../../comun/transferencia");
const infraestructura_1 = require("../../dominio/contratos/infraestructura");
const servicios_1 = require("../../dominio/contratos/aplicacion/servicios");
const entidades_1 = require("../../dominio/entidades");
const filtros_1 = require("../../dominio/entidades/filtros");
const transferencia_2 = require("../../dominio/transferencia");
const filtros_2 = require("../../dominio/transferencia/filtros");
let TipoDocumentoService = class TipoDocumentoService {
    constructor(repositorioFactory, mapper) {
        this.repositorioFactory = repositorioFactory;
        this.mapper = mapper;
    }
    async validar(operacion, objetoDto, errores = []) {
        switch (operacion) {
            case 'guardar': {
                const filtro = new entidades_1.TipoDocumento();
                filtro.sigla = objetoDto.sigla;
                filtro.nombre = objetoDto.nombre;
                filtro.descripcion = objetoDto.descripcion;
                filtro.estaActivo = objetoDto.estaActivo;
                const tipoDocumentoBD = await this.repositorioFactory.tipoDocumentoRepositorio.obtenerObjetoPor(filtro);
                if (tipoDocumentoBD) {
                    errores.push('El número de tipo documento ya existe.');
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
        const respuesta = await this.repositorioFactory.tipoDocumentoRepositorio.obtenerPor(this.mapper.map(filtroDto, filtros_2.TipoDocumentoFiltroDto, filtros_1.TipoDocumentoFiltro), pagina, cantidad, ordenarPor, orden);
        return new transferencia_1.ListaPaginadaDto(this.mapper.mapArray(respuesta.lista, entidades_1.TipoDocumento, transferencia_2.TipoDocumentoDto), respuesta.totalRegistros);
    }
    async obtenerPorId(id) {
        const objeto = await this.repositorioFactory.tipoDocumentoRepositorio.obtenerPorId(id);
        if (objeto === undefined)
            return null;
        return this.mapper.map(objeto, entidades_1.TipoDocumento, transferencia_2.TipoDocumentoDto);
    }
    async guardar(objetoDto) {
        const errores = [];
        const validacion = await this.validar('guardar', objetoDto, errores);
        if (!validacion) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, errores[0], null);
        }
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.TipoDocumentoCreacionDto, entidades_1.TipoDocumento);
            objeto.estaActivo = true;
            await this.repositorioFactory.tipoDocumentoRepositorio.guardar(objeto, transaccion);
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha guardado con éxito.', this.mapper.map(objeto, entidades_1.TipoDocumento, transferencia_2.TipoDocumentoDto));
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
            const objeto = this.mapper.map(objetoDto, transferencia_2.TipoDocumentoModificacionDto, entidades_1.TipoDocumento);
            await this.repositorioFactory.tipoDocumentoRepositorio.modificar(id, objeto, transaccion);
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha modificado con éxito.', this.mapper.map(objeto, entidades_1.TipoDocumento, transferencia_2.TipoDocumentoDto));
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
        const objeto = await this.repositorioFactory.tipoDocumentoRepositorio.obtenerPorId(id);
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
            await this.repositorioFactory.tipoDocumentoRepositorio.eliminar(id, transaccion, false);
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
TipoDocumentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(infraestructura_1.REPOSITORIO_FACTORY)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [Object, Object])
], TipoDocumentoService);
exports.TipoDocumentoService = TipoDocumentoService;
exports.TIPO_DOCUMENTO_SERVICIO_PROVIDER = {
    provide: servicios_1.TIPO_DOCUMENTO_SERVICIO,
    useClass: TipoDocumentoService,
};
//# sourceMappingURL=tipo-documento.service.js.map