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
exports.INFORME_SERVICIO_PROVIDER = exports.InformeService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_1 = require("@automapper/nestjs");
const transferencia_1 = require("../../../comun/transferencia");
const infraestructura_1 = require("../../dominio/contratos/infraestructura");
const servicios_1 = require("../../dominio/contratos/aplicacion/servicios");
const entidades_1 = require("../../dominio/entidades");
const filtros_1 = require("../../dominio/entidades/filtros");
const transferencia_2 = require("../../dominio/transferencia");
const filtros_2 = require("../../dominio/transferencia/filtros");
let InformeService = class InformeService {
    constructor(repositorioFactory, mapper) {
        this.repositorioFactory = repositorioFactory;
        this.mapper = mapper;
    }
    async validar(operacion, objetoDto, errores = []) {
        switch (operacion) {
            case 'guardar': {
                const filtro = new filtros_1.InformeFiltro();
                filtro.fk_idTramite = objetoDto.fk_idTramite;
                filtro.correlativo = objetoDto.correlativo;
                filtro.referencia = objetoDto.referencia;
                filtro.informePdf = objetoDto.informePdf;
                filtro.asunto = objetoDto.asunto;
                filtro.encargado = objetoDto.encargado;
                const informeBD = await this.repositorioFactory.informeRepositorio.obtenerObjetoPor(filtro);
                if (informeBD) {
                    errores.push('El correlativo de Informe ya existe.');
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
        const respuesta = await this.repositorioFactory.informeRepositorio.obtenerPor(this.mapper.map(filtroDto, filtros_2.InformeFiltroDto, filtros_1.InformeFiltro), pagina, cantidad, ordenarPor, orden);
        return new transferencia_1.ListaPaginadaDto(this.mapper.mapArray(respuesta.lista, entidades_1.Informe, transferencia_2.InformeDto), respuesta.totalRegistros);
    }
    async obtenerPorId(id) {
        const objeto = await this.repositorioFactory.informeRepositorio.obtenerPorId(id);
        if (objeto === undefined)
            return null;
        return this.mapper.map(objeto, entidades_1.Informe, transferencia_2.InformeDto);
    }
    async guardar(objetoDto) {
        console.log(objetoDto);
        const errores = [];
        const validacion = await this.validar('guardar', objetoDto, errores);
        if (!validacion) {
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Error, errores[0], null);
        }
        const transaccion = await this.repositorioFactory.iniciarTransaccion();
        try {
            const objeto = this.mapper.map(objetoDto, transferencia_2.InformeCreacionDto, entidades_1.Informe);
            const informeId = await this.repositorioFactory.informeRepositorio.guardar(objeto, transaccion);
            const sujeto = new entidades_1.SujetoIdentificado();
            if (objetoDto.listaSujetoIdentificado && objetoDto.listaSujetoIdentificado.length > 0) {
                for (let index = 0; index < objetoDto.listaSujetoIdentificado.length; index++) {
                    console.log(index);
                    sujeto.fk_idInforme = informeId;
                    sujeto.comunidad = objetoDto.listaSujetoIdentificado[index].comunidad;
                    sujeto.autoridad = objetoDto.listaSujetoIdentificado[index].autoridad;
                    sujeto.telefono = objetoDto.listaSujetoIdentificado[index].telefono;
                    await this.repositorioFactory.sujetoIdentificadoRepositorio.guardar(sujeto, transaccion);
                }
            }
            const resolucion = new entidades_1.Resolucion();
            if (objeto.flujo === 'Identificacion') {
                resolucion.fk_idTramite = objeto.fk_idTramite;
                resolucion.informe = objeto.correlativo;
                resolucion.resolucion = null;
                resolucion.informeAprobado = false;
                resolucion.actoAdministrativo = false;
                resolucion.resolucionPdf = null;
                resolucion.flujo = 'Deliberacion';
                resolucion.referencia = null;
                await this.repositorioFactory.resolucionRepositorio.guardar(resolucion, transaccion);
            }
            else {
                if (objeto.flujo === 'Deliberacion') {
                    resolucion.fk_idTramite = objeto.fk_idTramite;
                    resolucion.informe = objeto.correlativo;
                    resolucion.resolucion = null;
                    resolucion.informeAprobado = false;
                    resolucion.actoAdministrativo = false;
                    resolucion.resolucionPdf = null;
                    resolucion.flujo = 'Mediacion';
                    resolucion.referencia = null;
                    await this.repositorioFactory.resolucionRepositorio.guardar(resolucion, transaccion);
                }
            }
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha guardado con éxito.', this.mapper.map(objeto, entidades_1.Informe, transferencia_2.InformeDto));
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
            const objeto = this.mapper.map(objetoDto, transferencia_2.InformeModificacionDto, entidades_1.Informe);
            await this.repositorioFactory.informeRepositorio.modificar(id, objeto, transaccion);
            await this.repositorioFactory.confirmar(transaccion);
            return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, 'El registro se ha modificado con éxito.', this.mapper.map(objeto, entidades_1.Informe, transferencia_2.InformeDto));
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
        const objeto = await this.repositorioFactory.informeRepositorio.obtenerPorId(id);
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
            await this.repositorioFactory.informeRepositorio.eliminar(id, transaccion, false);
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
InformeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(infraestructura_1.REPOSITORIO_FACTORY)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [Object, Object])
], InformeService);
exports.InformeService = InformeService;
exports.INFORME_SERVICIO_PROVIDER = {
    provide: servicios_1.INFORME_SERVICIO,
    useClass: InformeService,
};
//# sourceMappingURL=informe.service.js.map