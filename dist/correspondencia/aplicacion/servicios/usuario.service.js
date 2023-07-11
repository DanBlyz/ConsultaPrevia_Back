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
exports.USUARIO_SERVICIO_PROVIDER = exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_1 = require("@automapper/nestjs");
const transferencia_1 = require("../../../comun/transferencia");
const infraestructura_1 = require("../../dominio/contratos/infraestructura");
const servicios_1 = require("../../dominio/contratos/aplicacion/servicios");
const entidades_1 = require("../../dominio/entidades");
const filtros_1 = require("../../dominio/entidades/filtros");
const transferencia_2 = require("../../dominio/transferencia");
const filtros_2 = require("../../dominio/transferencia/filtros");
let UsuarioService = class UsuarioService {
    constructor(repositorioFactory, mapper) {
        this.repositorioFactory = repositorioFactory;
        this.mapper = mapper;
    }
    async buscar(filtroDto, pagina, cantidad) {
        const respuesta = await this.repositorioFactory.usuarioRepositorio.obtenerPor(this.mapper.map(filtroDto, filtros_2.UsuarioFiltroDto, filtros_1.UsuarioFiltro), pagina, cantidad);
        return new transferencia_1.ListaPaginadaDto(this.mapper.mapArray(respuesta.lista, entidades_1.Usuario, transferencia_2.UsuarioDto), respuesta.totalRegistros);
    }
    async obtenerPorId(id) {
        const objeto = await this.repositorioFactory.usuarioRepositorio.obtenerPorId(id);
        if (objeto === undefined)
            return null;
        return this.mapper.map(objeto, entidades_1.Usuario, transferencia_2.UsuarioDto);
    }
    async guardar(objetoDto) {
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.UsuarioCreacionDto, entidades_1.Usuario);
            const id = await this.repositorioFactory.usuarioRepositorio.guardar(objeto, transaccion);
            if (id == 0) {
                await this.repositorioFactory.liberar(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido guardar.', null);
            }
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha guardado con éxito.', this.mapper.map(objeto, entidades_1.Usuario, transferencia_2.UsuarioDto));
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
            const objeto = this.mapper.map(objetoDto, transferencia_2.UsuarioModificacionDto, entidades_1.Usuario);
            const operacion = await this.repositorioFactory.usuarioRepositorio.modificar(id, objeto, transaccion);
            if (!operacion) {
                await this.repositorioFactory.liberar(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
            }
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha modificado con éxito.', this.mapper.map(objeto, entidades_1.Usuario, transferencia_2.UsuarioDto));
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
            const operacion = await this.repositorioFactory.usuarioRepositorio.eliminar(id, transaccion, false);
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
    async obtenerPorCodCuenta(codCuenta) {
        const filtro = new filtros_2.CuentaFiltroDto();
        filtro.codigo = codCuenta;
        const cuentaBD = await this.repositorioFactory.cuentaRepositorio.obtenerObjetoPor(filtro);
        if (cuentaBD) {
            const objeto = await this.repositorioFactory.usuarioRepositorio.obtenerPorId(cuentaBD.id);
            return this.mapper.map(objeto, entidades_1.Usuario, transferencia_2.UsuarioDto);
        }
        else {
            return null;
        }
    }
    async modificarPorCodCuenta(codCuenta, objetoDto) {
        const filtro = new filtros_2.CuentaFiltroDto();
        filtro.codigo = codCuenta;
        const cuentaBD = await this.repositorioFactory.cuentaRepositorio.obtenerObjetoPor(filtro);
        if (cuentaBD) {
            const respuesta = await this.modificar(cuentaBD.id, objetoDto);
            return respuesta;
        }
        else {
            return null;
        }
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(infraestructura_1.REPOSITORIO_FACTORY)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [Object, Object])
], UsuarioService);
exports.UsuarioService = UsuarioService;
exports.USUARIO_SERVICIO_PROVIDER = {
    provide: servicios_1.USUARIO_SERVICIO,
    useClass: UsuarioService,
};
//# sourceMappingURL=usuario.service.js.map