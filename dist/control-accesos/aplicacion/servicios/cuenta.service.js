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
exports.CUENTA_SERVICIO_PROVIDER = exports.CuentaService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_1 = require("@automapper/nestjs");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const auxiliares_1 = require("../../../comun/auxiliares");
const transferencia_1 = require("../../../comun/transferencia");
const persistencia_1 = require("../../dominio/contratos/infraestructura/persistencia");
const servicios_1 = require("../../dominio/contratos/aplicacion/servicios");
const entidades_1 = require("../../dominio/entidades");
const filtros_1 = require("../../dominio/entidades/filtros");
const transferencia_2 = require("../../dominio/transferencia");
const filtros_2 = require("../../dominio/transferencia/filtros");
let CuentaService = class CuentaService {
    constructor(repositorioFactory, mapper, jwtService) {
        this.repositorioFactory = repositorioFactory;
        this.mapper = mapper;
        this.jwtService = jwtService;
    }
    async buscar(filtroDto, pagina, cantidad) {
        const respuesta = await this.repositorioFactory.cuentaRepositorio.obtenerPor(this.mapper.map(filtroDto, filtros_2.CuentaFiltroDto, filtros_1.CuentaFiltro), pagina, cantidad);
        return new transferencia_1.ListaPaginadaDto(this.mapper.mapArray(respuesta.lista, entidades_1.Cuenta, transferencia_2.CuentaDto), respuesta.totalRegistros);
    }
    async obtenerPorId(id) {
        const objeto = await this.repositorioFactory.cuentaRepositorio.obtenerPorId(id);
        if (objeto === undefined)
            return null;
        return this.mapper.map(objeto, entidades_1.Cuenta, transferencia_2.CuentaDto);
    }
    async guardar(objetoDto, usuarioDto = null) {
        const cuentaBD = await this.repositorioFactory.cuentaRepositorio.obtenerPorNombre(objetoDto.nombre);
        if (cuentaBD) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'La cuenta ya existe.', null);
        }
        if (usuarioDto && usuarioDto.correoElectronico) {
            const usuarioBD = await this.repositorioFactory.usuarioRepositorio.obtenerObjetoPor({
                correoElectronico: usuarioDto.correoElectronico,
            });
            if (usuarioBD) {
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El correo electrónico ya esta en uso en otra cuenta.', null);
            }
        }
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.CuentaCreacionDto, entidades_1.Cuenta);
            objeto.codigo = await auxiliares_1.FuncionesHelper.obtenerCadenaAleatoria(10);
            if (objeto.modoAutenticacion === 'BASE DE DATOS') {
                objeto.clave = await bcrypt.genSalt();
                objeto.contrasenia = await bcrypt.hash(objeto.contrasenia, objeto.clave);
            }
            else {
                objeto.clave = '';
                objeto.contrasenia = '';
            }
            objeto.estaAutorizada = true;
            objeto.instUltSesion = null;
            objeto.numIntFallidos = 0;
            objeto.estaBloqueada = false;
            objeto.instUltBloqueo = null;
            const id = await this.repositorioFactory.cuentaRepositorio.guardar(objeto, transaccion);
            if (id === 0) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido guardar.', null);
            }
            if (usuarioDto) {
                const usuario = this.mapper.map(usuarioDto, transferencia_2.UsuarioCreacionDto, entidades_1.Usuario);
                usuario.id = id;
                usuario.nombre = usuario.nombre || '';
                usuario.apellido = usuario.apellido || '';
                const usuarioId = await this.repositorioFactory.usuarioRepositorio.guardar(usuario, transaccion);
                if (usuarioId === 0) {
                    await this.repositorioFactory.revertir(transaccion);
                    return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido guardar.', null);
                }
            }
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha guardado con éxito.', this.mapper.map(objeto, entidades_1.Cuenta, transferencia_2.CuentaDto));
        }
        catch (error) {
            await this.repositorioFactory.revertir(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Excepcion, error.toString(), null);
        }
        finally {
            await this.repositorioFactory.liberar(transaccion);
        }
    }
    async modificar(id, objetoDto, usuarioDto = null) {
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.CuentaModificacionDto, entidades_1.Cuenta);
            delete objeto.codigo;
            let operacion = await this.repositorioFactory.cuentaRepositorio.modificar(id, objeto, transaccion);
            if (!operacion) {
                await this.repositorioFactory.liberar(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
            }
            if (usuarioDto) {
                const usuario = this.mapper.map(usuarioDto, transferencia_2.UsuarioModificacionDto, entidades_1.Usuario);
                operacion = await this.repositorioFactory.usuarioRepositorio.modificar(id, usuario, transaccion);
                if (!operacion) {
                    await this.repositorioFactory.revertir(transaccion);
                    return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
                }
            }
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha modificado con éxito.', this.mapper.map(objeto, entidades_1.Cuenta, transferencia_2.CuentaDto));
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
            let operacion = await this.repositorioFactory.cuentaRepositorio.eliminar(id, transaccion, false);
            if (!operacion) {
                await this.repositorioFactory.liberar(transaccion);
                return new transferencia_1.RespuestaDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido eliminar.');
            }
            operacion = await this.repositorioFactory.usuarioRepositorio.eliminar(id, transaccion, false);
            if (!operacion) {
                await this.repositorioFactory.revertir(transaccion);
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
    async validar(cuenta, contrasenia) {
        const cuentaBD = await this.repositorioFactory.cuentaRepositorio.validar(cuenta, contrasenia);
        if (cuentaBD) {
            return cuentaBD;
        }
        else {
            this.establecerIntentoFallido(cuenta);
            return null;
        }
    }
    async establecerIntentoFallido(cuenta) {
        const cuentaBD = await this.repositorioFactory.cuentaRepositorio.obtenerPorNombre(cuenta);
        if (cuentaBD && cuentaBD.estaAutorizada && !cuentaBD.estaBloqueada) {
            cuentaBD.numIntFallidos = cuentaBD.numIntFallidos + 1;
            if (cuentaBD.numIntFallidos >= 3) {
                cuentaBD.estaBloqueada = true;
                cuentaBD.instUltBloqueo = new Date();
            }
            await this.modificar(cuentaBD.id, cuentaBD);
        }
    }
    async cambiarContrasenia(codCuenta, contraseniaActual, contraseniaNueva) {
        const filtro = new filtros_2.CuentaFiltroDto();
        filtro.codigo = codCuenta;
        let cuentaBD = await this.repositorioFactory.cuentaRepositorio.obtenerObjetoPor(filtro);
        if (!cuentaBD) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
        }
        const nombre = cuentaBD.nombre;
        cuentaBD = await this.repositorioFactory.cuentaRepositorio.validar(nombre, contraseniaActual);
        if (!cuentaBD) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
        }
        if (contraseniaNueva.length < 8) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'La contraseña debe tener una longitud de 8 caracteres como mínimo.', null);
        }
        cuentaBD.clave = await bcrypt.genSalt();
        cuentaBD.contrasenia = await bcrypt.hash(contraseniaNueva, cuentaBD.clave);
        return await this.modificar(cuentaBD.id, cuentaBD);
    }
    async restablecerContrasenia(id, contrasenia) {
        const cuentaBD = await this.repositorioFactory.cuentaRepositorio.obtenerPorId(id);
        if (!cuentaBD) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
        }
        if (contrasenia.length < 8) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'La contraseña debe tener una longitud de 8 caracteres como mínimo.', null);
        }
        cuentaBD.clave = await bcrypt.genSalt();
        cuentaBD.contrasenia = await bcrypt.hash(contrasenia, cuentaBD.clave);
        return await this.modificar(cuentaBD.id, cuentaBD);
    }
    async desbloquear(id) {
        const cuentaBD = await this.repositorioFactory.cuentaRepositorio.obtenerPorId(id);
        if (cuentaBD === null || !cuentaBD.estaBloqueada) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
        }
        cuentaBD.estaBloqueada = false;
        cuentaBD.numIntFallidos = 0;
        return await this.modificar(cuentaBD.id, cuentaBD);
    }
    async autorizar(id) {
        const cuentaBD = await this.repositorioFactory.cuentaRepositorio.obtenerPorId(id);
        if (cuentaBD === null || cuentaBD.estaAutorizada) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
        }
        cuentaBD.estaAutorizada = true;
        return await this.modificar(cuentaBD.id, cuentaBD);
    }
    async desautorizar(id) {
        const cuentaBD = await this.repositorioFactory.cuentaRepositorio.obtenerPorId(id);
        if (cuentaBD === null || !cuentaBD.estaAutorizada) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
        }
        cuentaBD.estaAutorizada = false;
        return await this.modificar(cuentaBD.id, cuentaBD);
    }
    async obtenerToken(objetoDto) {
        const cuentaBD = await this.repositorioFactory.cuentaRepositorio.validar(objetoDto.cuenta, objetoDto.contrasenia);
        if (cuentaBD) {
            const usuarioBD = await this.repositorioFactory.usuarioRepositorio.obtenerPorId(cuentaBD.id);
            const payload = {
                user_id: cuentaBD.codigo,
                name: usuarioBD ? usuarioBD.nomPublico : '',
                given_name: usuarioBD ? usuarioBD.nombre : '',
                family_name: usuarioBD ? usuarioBD.apellido : '',
                nickname: cuentaBD.nombre,
                picture: null,
                email: usuarioBD ? usuarioBD.correoElectronico : '',
                nonce: '',
                auth: 'DB',
                roles: '',
            };
            cuentaBD.instUltSesion = new Date();
            if (cuentaBD.numIntFallidos > 0) {
                cuentaBD.numIntFallidos = 0;
            }
            return await {
                access_token: this.jwtService.sign(payload),
            };
        }
        else {
            await this.establecerIntentoFallido(objetoDto.cuenta);
            return await {
                access_token: null,
            };
        }
    }
    async registrarse(objetoDto, usuarioDto = null, roles) {
        const cuentaBD = await this.repositorioFactory.cuentaRepositorio.obtenerPorNombre(objetoDto.nombre);
        if (cuentaBD) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'La cuenta ya existe.', null);
        }
        const usuarioBD = await this.repositorioFactory.usuarioRepositorio.obtenerObjetoPor({
            correoElectronico: usuarioDto.correoElectronico,
        });
        if (usuarioBD) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El correo electrónico ya esta en uso en otra cuenta.', null);
        }
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.CuentaCreacionDto, entidades_1.Cuenta);
            objeto.codigo = auxiliares_1.FuncionesHelper.obtenerCadenaAleatoria(10);
            objeto.clave = await bcrypt.genSalt();
            objeto.contrasenia = await bcrypt.hash(objeto.contrasenia, objeto.clave);
            objeto.estaAutorizada = true;
            objeto.instUltSesion = null;
            objeto.numIntFallidos = 0;
            objeto.estaBloqueada = false;
            objeto.instUltBloqueo = null;
            const id = await this.repositorioFactory.cuentaRepositorio.guardar(objeto, transaccion);
            if (id === 0) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido guardar.', null);
            }
            if (usuarioDto) {
                const usuario = this.mapper.map(usuarioDto, transferencia_2.UsuarioCreacionDto, entidades_1.Usuario);
                usuario.id = id;
                usuario.nombre = usuario.nombre || '';
                usuario.apellido = usuario.apellido || '';
                const usuarioId = await this.repositorioFactory.usuarioRepositorio.guardar(usuario, transaccion);
                if (usuarioId === 0) {
                    await this.repositorioFactory.revertir(transaccion);
                    return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido guardar.', null);
                }
            }
            if (roles && roles.length > 0) {
                for (const rol of roles) {
                    const rolBD = await this.repositorioFactory.rolRepositorio.obtenerObjetoPor({
                        codigo: rol,
                    });
                    if (rolBD) {
                        const rolCuenta = new entidades_1.RolCuenta();
                        rolCuenta.instRegistro = new Date();
                        rolCuenta.fecInicio = new Date();
                        rolCuenta.fecConclusion = null;
                        rolCuenta.rolId = rolBD.id;
                        rolCuenta.cuentaId = id;
                        const rolCuentaId = await this.repositorioFactory.rolCuentaRepositorio.guardar(rolCuenta, transaccion);
                        if (rolCuentaId === 0) {
                            await this.repositorioFactory.revertir(transaccion);
                            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido guardar.', null);
                        }
                    }
                    else {
                        await this.repositorioFactory.revertir(transaccion);
                        return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido guardar', null);
                    }
                }
            }
            else {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido guardar.', null);
            }
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha guardado con éxito.', this.mapper.map(objeto, entidades_1.Cuenta, transferencia_2.CuentaDto));
        }
        catch (error) {
            await this.repositorioFactory.revertir(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Excepcion, error.toString(), null);
        }
        finally {
            await this.repositorioFactory.liberar(transaccion);
        }
    }
};
CuentaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(persistencia_1.REPOSITORIO_FACTORY)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [Object, Object, jwt_1.JwtService])
], CuentaService);
exports.CuentaService = CuentaService;
exports.CUENTA_SERVICIO_PROVIDER = {
    provide: servicios_1.CUENTA_SERVICIO,
    useClass: CuentaService,
};
//# sourceMappingURL=cuenta.service.js.map