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
exports.PUESTO_PERSONA_SERVICIO_PROVIDER = exports.PuestoPersonaService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_1 = require("@automapper/nestjs");
const luxon_1 = require("luxon");
const transferencia_1 = require("../../../comun/transferencia");
const persistencia_1 = require("../../dominio/contratos/infraestructura/persistencia");
const servicios_1 = require("../../dominio/contratos/aplicacion/servicios");
const entidades_1 = require("../../dominio/entidades");
const filtros_1 = require("../../dominio/entidades/filtros");
const transferencia_2 = require("../../dominio/transferencia");
const filtros_2 = require("../../dominio/transferencia/filtros");
let PuestoPersonaService = class PuestoPersonaService {
    constructor(repositorioFactory, mapper) {
        this.repositorioFactory = repositorioFactory;
        this.mapper = mapper;
    }
    async validar(operacion, objetoDto, errores = []) {
        switch (operacion) {
            case 'guardar': {
                const filtro = new filtros_1.PuestoPersonaFiltro();
                filtro.tipoMovilidad = objetoDto.tipoMovilidad;
                filtro.tipoLaboral = objetoDto.tipoLaboral;
                filtro.estado = objetoDto.estado;
                filtro.puestoId = objetoDto.puestoId;
                const puestoPersonaBD = await this.repositorioFactory.puestoPersonaRepositorio.obtenerObjetoPor(filtro);
                if (puestoPersonaBD) {
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
        const respuesta = await this.repositorioFactory.puestoPersonaRepositorio.obtenerPor(this.mapper.map(filtroDto, filtros_2.PuestoPersonaFiltroDto, filtros_1.PuestoPersonaFiltro), pagina, cantidad, ordenarPor, orden);
        return new transferencia_1.ListaPaginadaDto(this.mapper.mapArray(respuesta.lista, entidades_1.PuestoPersona, transferencia_2.PuestoPersonaDto), respuesta.totalRegistros);
    }
    async obtenerPorId(id) {
        const objeto = await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
        if (objeto === undefined)
            return null;
        return this.mapper.map(objeto, entidades_1.PuestoPersona, transferencia_2.PuestoPersonaDto);
    }
    async modificar(id, objetoDto) {
        const errores = [];
        const validacion = await this.validar('modificar', objetoDto, errores);
        if (!validacion) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, errores[0], null);
        }
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.PuestoPersonaModificacionDto, entidades_1.PuestoPersona);
            const puestoPersonaBD = await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
            if (!puestoPersonaBD) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no existe.', null);
            }
            const infoLaboralBD = await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(objeto.personaId);
            if (!infoLaboralBD) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
            }
            infoLaboralBD.tipoLaboral = objeto.tipoLaboral;
            infoLaboralBD.uniOrganizacionalId = objeto.uniOrganizacionalId;
            infoLaboralBD.puestoId = objeto.puestoId;
            const infoLaboralRespuesta = await this.repositorioFactory.infoLaboralRepositorio.modificar(infoLaboralBD.id, infoLaboralBD, transaccion);
            if (!infoLaboralRespuesta) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
            }
            delete objeto.tipoMovilidad;
            delete objeto.esInterinato;
            delete objeto.estado;
            objeto.fecConclusion =
                objeto.fecConclusion.toString() === '' ? null : objeto.fecConclusion;
            await this.repositorioFactory.puestoPersonaRepositorio.modificar(id, objeto, transaccion);
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha modificado con éxito.', this.mapper.map(objeto, entidades_1.PuestoPersona, transferencia_2.PuestoPersonaDto));
        }
        catch (error) {
            await this.repositorioFactory.revertir(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Excepcion, error.toString(), null);
        }
        finally {
            await this.repositorioFactory.liberar(transaccion);
        }
    }
    async guardarIncorporacion(objetoDto) {
        const errores = [];
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.PuestoPersonaCreacionDto, entidades_1.PuestoPersona);
            let infoLaboralBD = await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(objetoDto.personaId);
            if (!infoLaboralBD) {
                infoLaboralBD = new entidades_1.InfoLaboral();
                infoLaboralBD.id = objeto.personaId;
                infoLaboralBD.tipoLaboral = objeto.tipoLaboral;
                infoLaboralBD.uniOrganizacionalId = objeto.uniOrganizacionalId;
                infoLaboralBD.puestoId = objeto.puestoId;
                infoLaboralBD.estado = 'ACTIVO';
                const infoLaboralId = await this.repositorioFactory.infoLaboralRepositorio.guardar(infoLaboralBD, transaccion);
                if (infoLaboralId <= 0) {
                    await this.repositorioFactory.revertir(transaccion);
                    return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido guardar.', null);
                }
            }
            else {
                infoLaboralBD.tipoLaboral = objeto.tipoLaboral;
                infoLaboralBD.uniOrganizacionalId = objeto.uniOrganizacionalId;
                infoLaboralBD.puestoId = objeto.puestoId;
                infoLaboralBD.estado = 'ACTIVO';
                const infoLaboralRespuesta = await this.repositorioFactory.infoLaboralRepositorio.modificar(infoLaboralBD.id, infoLaboralBD, transaccion);
                if (!infoLaboralRespuesta) {
                    await this.repositorioFactory.revertir(transaccion);
                    return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
                }
            }
            objeto.tipoMovilidad = 'INCORPORACION';
            objeto.esInterinato = false;
            objeto.tieneDesvinculacion = false;
            objeto.estado = 'ACTUAL';
            const validacion = await this.validar('guardar', objeto, errores);
            if (!validacion) {
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, errores[0], null);
            }
            await this.repositorioFactory.puestoPersonaRepositorio.guardar(objeto, transaccion);
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha guardado con éxito.', this.mapper.map(objeto, entidades_1.PuestoPersona, transferencia_2.PuestoPersonaDto));
        }
        catch (error) {
            await this.repositorioFactory.revertir(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Excepcion, error.toString(), null);
        }
        finally {
            await this.repositorioFactory.liberar(transaccion);
        }
    }
    async guardarReasignacion(objetoDto) {
        const errores = [];
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.PuestoPersonaCreacionDto, entidades_1.PuestoPersona);
            const infoLaboralBD = await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(objeto.personaId);
            if (!infoLaboralBD) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido guardar.', null);
            }
            infoLaboralBD.tipoLaboral = objeto.tipoLaboral;
            infoLaboralBD.uniOrganizacionalId = objeto.uniOrganizacionalId;
            infoLaboralBD.puestoId = objeto.puestoId;
            const infoLaboralModificacion = await this.repositorioFactory.infoLaboralRepositorio.modificar(infoLaboralBD.id, infoLaboralBD, transaccion);
            if (!infoLaboralModificacion) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
            }
            const filtro = new filtros_2.PuestoPersonaFiltroDto();
            filtro.personaId = objeto.personaId;
            filtro.esInterinato = false;
            filtro.estado = 'ACTUAL';
            const ultimoPuestoPersona = await this.repositorioFactory.puestoPersonaRepositorio.obtenerObjetoPor(filtro, 'id', 'DESC');
            if (!ultimoPuestoPersona) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido guardar.', null);
            }
            ultimoPuestoPersona.estado = 'ANTERIOR';
            ultimoPuestoPersona.fecConclusion = luxon_1.DateTime.fromISO(objeto.fecInicio.toString(), {
                zone: 'utc',
            })
                .setZone(luxon_1.DateTime.local().zoneName, { keepLocalTime: true })
                .minus({ days: 1 })
                .toJSDate();
            const puestoPersonaModificacion = await this.repositorioFactory.puestoPersonaRepositorio.modificar(ultimoPuestoPersona.id, ultimoPuestoPersona, transaccion);
            if (!puestoPersonaModificacion) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
            }
            objeto.tipoMovilidad = 'REASIGNACION';
            objeto.esInterinato = false;
            objeto.tieneDesvinculacion = false;
            objeto.estado = 'ACTUAL';
            const validacion = await this.validar('guardar', objeto, errores);
            if (!validacion) {
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, errores[0], null);
            }
            await this.repositorioFactory.puestoPersonaRepositorio.guardar(objeto, transaccion);
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha guardado con éxito.', this.mapper.map(objeto, entidades_1.PuestoPersona, transferencia_2.PuestoPersonaDto));
        }
        catch (error) {
            await this.repositorioFactory.revertir(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Excepcion, error.toString(), null);
        }
        finally {
            await this.repositorioFactory.liberar(transaccion);
        }
    }
    async registrarDesvinculacion(id, fecConclusion) {
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const puestoPersonaBD = await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
            if (!puestoPersonaBD ||
                puestoPersonaBD.esInterinato ||
                puestoPersonaBD.estado !== 'ACTUAL') {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no existe.', null);
            }
            puestoPersonaBD.fecConclusion = fecConclusion;
            puestoPersonaBD.tieneDesvinculacion = true;
            await this.repositorioFactory.puestoPersonaRepositorio.modificar(id, puestoPersonaBD, transaccion);
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha modificado con éxito.', this.mapper.map(puestoPersonaBD, entidades_1.PuestoPersona, transferencia_2.PuestoPersonaDto));
        }
        catch (error) {
            await this.repositorioFactory.revertir(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Excepcion, error.toString(), null);
        }
        finally {
            await this.repositorioFactory.liberar(transaccion);
        }
    }
    async darBaja(id) {
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const puestoPersonaBD = await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
            if (!puestoPersonaBD ||
                !puestoPersonaBD.tieneDesvinculacion ||
                puestoPersonaBD.estado !== 'ACTUAL') {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'No se puede realizar la operación solicitada.', null);
            }
            const diferencia = luxon_1.DateTime.fromISO(puestoPersonaBD.fecConclusion.toString(), {
                zone: 'utc',
            })
                .setZone(luxon_1.DateTime.local().zoneName, { keepLocalTime: true })
                .diffNow('days');
            if (diferencia.days > -1) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'No se puede realizar la operación solicitada.', null);
            }
            const infoLaboralBD = await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(puestoPersonaBD.personaId);
            if (!infoLaboralBD) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
            }
            infoLaboralBD.estado = 'PASIVO';
            const infoLaboralRespuesta = await this.repositorioFactory.infoLaboralRepositorio.modificar(infoLaboralBD.id, infoLaboralBD, transaccion);
            if (!infoLaboralRespuesta) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
            }
            puestoPersonaBD.estado = 'ANTERIOR';
            await this.repositorioFactory.puestoPersonaRepositorio.modificar(id, puestoPersonaBD, transaccion);
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha modificado con éxito.', this.mapper.map(puestoPersonaBD, entidades_1.PuestoPersona, transferencia_2.PuestoPersonaDto));
        }
        catch (error) {
            await this.repositorioFactory.revertir(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Excepcion, error.toString(), null);
        }
        finally {
            await this.repositorioFactory.liberar(transaccion);
        }
    }
    async anular(id) {
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const puestoPersonaBD = await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
            if (!puestoPersonaBD ||
                puestoPersonaBD.esInterinato ||
                puestoPersonaBD.estado !== 'ACTUAL') {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
            }
            const filtro = new filtros_2.PuestoPersonaFiltroDto();
            filtro.estado = 'ANTERIOR';
            filtro.personaId = puestoPersonaBD.personaId;
            const anteriorPuestoPersona = await this.repositorioFactory.puestoPersonaRepositorio.obtenerObjetoPor(filtro, 'id', 'DESC');
            if (anteriorPuestoPersona) {
                const infoLaboral = await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(puestoPersonaBD.personaId);
                if (!infoLaboral) {
                    await this.repositorioFactory.revertir(transaccion);
                    return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
                }
                infoLaboral.tipoLaboral = anteriorPuestoPersona.tipoLaboral;
                infoLaboral.uniOrganizacionalId =
                    anteriorPuestoPersona.uniOrganizacionalId;
                infoLaboral.puestoId = anteriorPuestoPersona.puestoId;
                const infoLaboralRespuesta = await this.repositorioFactory.infoLaboralRepositorio.modificar(infoLaboral.id, infoLaboral, transaccion);
                if (!infoLaboralRespuesta) {
                    await this.repositorioFactory.revertir(transaccion);
                    return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
                }
                anteriorPuestoPersona.fecConclusion = null;
                anteriorPuestoPersona.estado = 'ACTUAL';
                await this.repositorioFactory.puestoPersonaRepositorio.modificar(anteriorPuestoPersona.id, anteriorPuestoPersona, transaccion);
            }
            else {
                const infoLaboral = await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(puestoPersonaBD.personaId);
                if (infoLaboral) {
                    await this.repositorioFactory.infoLaboralRepositorio.eliminar(puestoPersonaBD.personaId, transaccion, true);
                }
            }
            puestoPersonaBD.estado = 'ANULADO';
            const puestoPersonaModificacion = await this.repositorioFactory.puestoPersonaRepositorio.modificar(puestoPersonaBD.id, puestoPersonaBD, transaccion);
            if (!puestoPersonaModificacion) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no se ha podido modificar.', null);
            }
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha modificado con éxito.', this.mapper.map(puestoPersonaBD, entidades_1.PuestoPersona, transferencia_2.PuestoPersonaDto));
        }
        catch (error) {
            await this.repositorioFactory.revertir(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Excepcion, error.toString(), null);
        }
        finally {
            await this.repositorioFactory.liberar(transaccion);
        }
    }
    async guardarInterinato(objetoDto) {
        const errores = [];
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.PuestoPersonaCreacionDto, entidades_1.PuestoPersona);
            objeto.tipoMovilidad = 'DESIGNACION';
            objeto.esInterinato = true;
            objeto.tieneDesvinculacion = false;
            objeto.estado = 'ACTUAL';
            const validacion = await this.validar('guardar', objeto, errores);
            if (!validacion) {
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, errores[0], null);
            }
            await this.repositorioFactory.puestoPersonaRepositorio.guardar(objeto, transaccion);
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha guardado con éxito.', this.mapper.map(objeto, entidades_1.PuestoPersona, transferencia_2.PuestoPersonaDto));
        }
        catch (error) {
            await this.repositorioFactory.revertir(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Excepcion, error.toString(), null);
        }
        finally {
            await this.repositorioFactory.liberar(transaccion);
        }
    }
    async modificarInterinato(id, objetoDto) {
        const errores = [];
        const validacion = await this.validar('modificar', objetoDto, errores);
        if (!validacion) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, errores[0], null);
        }
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.PuestoPersonaModificacionDto, entidades_1.PuestoPersona);
            const puestoPersonaBD = await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
            if (!puestoPersonaBD || !puestoPersonaBD.esInterinato) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no existe.', null);
            }
            if (objeto.fecInicio) {
                objeto.fecInicio = luxon_1.DateTime.fromISO(objeto.fecInicio.toString(), {
                    zone: 'UTC-4',
                }).toJSDate();
            }
            if (objeto.fecConclusion) {
                objeto.fecConclusion = luxon_1.DateTime.fromISO(objeto.fecConclusion.toString(), {
                    zone: 'UTC-4',
                }).toJSDate();
            }
            delete objeto.tipoMovilidad;
            delete objeto.esInterinato;
            await this.repositorioFactory.puestoPersonaRepositorio.modificar(id, objeto, transaccion);
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha modificado con éxito.', this.mapper.map(objeto, entidades_1.PuestoPersona, transferencia_2.PuestoPersonaDto));
        }
        catch (error) {
            await this.repositorioFactory.revertir(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Excepcion, error.toString(), null);
        }
        finally {
            await this.repositorioFactory.liberar(transaccion);
        }
    }
    async eliminarInterinato(id) {
        const objeto = await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
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
            const puestoPersonaBD = await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
            if (!puestoPersonaBD || !puestoPersonaBD.esInterinato) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'El registro no existe.', null);
            }
            await this.repositorioFactory.puestoPersonaRepositorio.eliminar(id, transaccion, false);
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
    async darBajaInterinato(id) {
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const puestoPersonaBD = await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
            if (!puestoPersonaBD ||
                !puestoPersonaBD.esInterinato ||
                puestoPersonaBD.estado !== 'ACTUAL') {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'No se puede realizar la operación solicitada.', null);
            }
            const diferencia = luxon_1.DateTime.fromISO(puestoPersonaBD.fecConclusion.toString(), {
                zone: 'utc',
            })
                .setZone(luxon_1.DateTime.local().zoneName, { keepLocalTime: true })
                .diffNow('days');
            if (diferencia.days > -1) {
                await this.repositorioFactory.revertir(transaccion);
                return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, 'No se puede realizar la operación solicitada.', null);
            }
            puestoPersonaBD.estado = 'ANTERIOR';
            await this.repositorioFactory.puestoPersonaRepositorio.modificar(id, puestoPersonaBD, transaccion);
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha modificado con éxito.', this.mapper.map(puestoPersonaBD, entidades_1.PuestoPersona, transferencia_2.PuestoPersonaDto));
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
PuestoPersonaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(persistencia_1.REPOSITORIO_FACTORY)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [Object, Object])
], PuestoPersonaService);
exports.PuestoPersonaService = PuestoPersonaService;
exports.PUESTO_PERSONA_SERVICIO_PROVIDER = {
    provide: servicios_1.PUESTO_PERSONA_SERVICIO,
    useClass: PuestoPersonaService,
};
//# sourceMappingURL=puesto-persona.service.js.map