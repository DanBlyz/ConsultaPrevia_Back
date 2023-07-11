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
exports.DOCUMENTO_SERVICIO_PROVIDER = exports.DocumentoService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_1 = require("@automapper/nestjs");
const transferencia_1 = require("../../../comun/transferencia");
const infraestructura_1 = require("../../dominio/contratos/infraestructura");
const servicios_1 = require("../../dominio/contratos/aplicacion/servicios");
const entidades_1 = require("../../dominio/entidades");
const filtros_1 = require("../../dominio/entidades/filtros");
const transferencia_2 = require("../../dominio/transferencia");
const filtros_2 = require("../../dominio/transferencia/filtros");
let DocumentoService = class DocumentoService {
    constructor(repositorioFactory, mapper) {
        this.repositorioFactory = repositorioFactory;
        this.mapper = mapper;
    }
    async validar(operacion, objetoDto, errores = []) {
        switch (operacion) {
            case 'guardar': {
                const filtro = new filtros_1.DocumentoFiltro();
                filtro.numero = objetoDto.numero;
                filtro.gestion = objetoDto.gestion;
                filtro.tipoDocumentoId = objetoDto.tipoDocumentoId;
                const documentoBD = await this.repositorioFactory.documentoRepositorio.obtenerObjetoPor(filtro);
                if (documentoBD) {
                    errores.push('El número de documento ya existe.');
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
        const respuesta = await this.repositorioFactory.documentoRepositorio.obtenerPor(this.mapper.map(filtroDto, filtros_2.DocumentoFiltroDto, filtros_1.DocumentoFiltro), pagina, cantidad, ordenarPor, orden);
        return new transferencia_1.ListaPaginadaDto(this.mapper.mapArray(respuesta.lista, entidades_1.Documento, transferencia_2.DocumentoDto), respuesta.totalRegistros);
    }
    async obtenerPorId(id) {
        const objeto = await this.repositorioFactory.documentoRepositorio.obtenerPorId(id);
        if (objeto === undefined)
            return null;
        return this.mapper.map(objeto, entidades_1.Documento, transferencia_2.DocumentoDto);
    }
    async guardar(objetoDto) {
        const errores = [];
        const validacion = await this.validar('guardar', objetoDto, errores);
        if (!validacion) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, errores[0], null);
        }
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.DocumentoCreacionDto, entidades_1.Documento);
            const uniOrganizacional = await this.repositorioFactory.uniOrganizacionalRepositorio.obtenerPorId(objeto.uniOrganizacionalId);
            if (!uniOrganizacional) {
                return null;
            }
            const tipoDocumento = await this.repositorioFactory.tipoDocumentoRepositorio.obtenerPorId(objeto.tipoDocumentoId);
            if (!tipoDocumento) {
                return null;
            }
            objeto.gestion = new Date().getFullYear();
            objeto.numero =
                await this.repositorioFactory.documentoRepositorio.obtenerCorrelativo(objeto.tipoDocumentoId, objeto.gestion);
            objeto.cite = `${objeto.entidadSigla}-${uniOrganizacional.sigla}-${tipoDocumento.sigla}-${objeto.numero}/${objeto.gestion}`;
            objeto.instRegistro = new Date();
            objeto.fecha = objeto.instRegistro;
            objeto.esBorrador = true;
            objeto.estaImpreso = false;
            if (objeto.hojaRutaId) {
                const hojaRuta = this.repositorioFactory.hojaRutaRepositorio.obtenerPorId(objeto.hojaRutaId);
                if (!hojaRuta) {
                    return null;
                }
            }
            else {
                const hojaRuta = new entidades_1.HojaRuta();
                hojaRuta.gestion = new Date().getFullYear();
                hojaRuta.numero =
                    await this.repositorioFactory.hojaRutaRepositorio.obtenerCorrelativo(hojaRuta.gestion);
                hojaRuta.fecha = new Date();
                hojaRuta.estado = 'ACTIVA';
                const hojaRutaId = await this.repositorioFactory.hojaRutaRepositorio.guardar(hojaRuta, transaccion);
                objeto.hojaRutaId = hojaRutaId;
            }
            const documentoId = await this.repositorioFactory.documentoRepositorio.guardar(objeto, transaccion);
            if (objeto.listaParticipante && objeto.listaParticipante.length > 0) {
                objeto.listaParticipante.forEach(async (participante) => {
                    participante.documentoId = documentoId;
                    await this.repositorioFactory.participanteRepositorio.guardar(participante, transaccion);
                });
            }
            const seguimiento = new entidades_1.Seguimiento();
            seguimiento.accion = 'REGISTRADO';
            seguimiento.instante = new Date();
            seguimiento.proveidoAccion = null;
            seguimiento.proveido = null;
            seguimiento.fecRecepcion = null;
            seguimiento.observacion = null;
            seguimiento.esBorrador = true;
            seguimiento.estado = 'REGISTRADO';
            seguimiento.documentoId = documentoId;
            seguimiento.buzonIdOrigen = 5;
            seguimiento.buzonIdDestino = 1;
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha guardado con éxito.', this.mapper.map(objeto, entidades_1.Documento, transferencia_2.DocumentoDto));
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
            const objeto = this.mapper.map(objetoDto, transferencia_2.DocumentoModificacionDto, entidades_1.Documento);
            await this.repositorioFactory.documentoRepositorio.modificar(id, objeto, transaccion);
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha modificado con éxito.', this.mapper.map(objeto, entidades_1.Documento, transferencia_2.DocumentoDto));
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
        const objeto = await this.repositorioFactory.documentoRepositorio.obtenerPorId(id);
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
            await this.repositorioFactory.documentoRepositorio.eliminar(id, transaccion, false);
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
DocumentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(infraestructura_1.REPOSITORIO_FACTORY)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [Object, Object])
], DocumentoService);
exports.DocumentoService = DocumentoService;
exports.DOCUMENTO_SERVICIO_PROVIDER = {
    provide: servicios_1.DOCUMENTO_SERVICIO,
    useClass: DocumentoService,
};
//# sourceMappingURL=documento.service.js.map