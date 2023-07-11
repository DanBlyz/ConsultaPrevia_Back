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
var DocumentoRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOCUMENTO_REPOSITORIO_PROVIDER = exports.DocumentoRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_1 = require("@automapper/nestjs");
const modelos_1 = require("../../../../../comun/modelos");
const orm_1 = require("../orm");
const entidades_1 = require("../../../../dominio/entidades");
const __1 = require("../..");
let DocumentoRepository = DocumentoRepository_1 = class DocumentoRepository {
    constructor(conexion, mapper) {
        this.conexion = conexion;
        this.mapper = mapper;
        this.repositorio = this.conexion.getRepository(orm_1.DocumentoEntity);
    }
    evaluarCriterios(consulta, filtro, nulo, obligatorio) {
        if (!filtro) {
            if (nulo) {
                return consulta;
            }
            else {
                return null;
            }
        }
        let criterioUtilizado = false;
        if (filtro.numero && filtro.numero !== 0) {
            consulta = consulta.andWhere('documento.numero = :numero', {
                numero: filtro.numero,
            });
            criterioUtilizado = true;
        }
        if (filtro.gestion && filtro.gestion !== 0) {
            consulta = consulta.andWhere('documento.gestion = :gestion', {
                gestion: filtro.gestion,
            });
            criterioUtilizado = true;
        }
        if (filtro.cite && filtro.cite !== '') {
            consulta = consulta.andWhere('documento.cite ILIKE :cite', {
                cite: `%${filtro.cite}%`,
            });
            criterioUtilizado = true;
        }
        if (filtro.citeExterno && filtro.citeExterno !== '') {
            consulta = consulta.andWhere('documento.citeExterno ILIKE :citeExterno', {
                citeExterno: `%${filtro.citeExterno}%`,
            });
            criterioUtilizado = true;
        }
        if (filtro.referencia && filtro.referencia !== '') {
            consulta = consulta.andWhere('documento.referencia ILIKE :referencia', {
                referencia: `%${filtro.referencia}%`,
            });
            criterioUtilizado = true;
        }
        if (filtro.prioridad && filtro.prioridad !== '') {
            consulta = consulta.andWhere('documento.prioridad ILIKE :prioridad', {
                prioridad: filtro.prioridad,
            });
            criterioUtilizado = true;
        }
        if (filtro.observacion && filtro.observacion !== '') {
            consulta = consulta.andWhere('documento.observacion ILIKE :observacion', {
                observacion: `%${filtro.observacion}%`,
            });
            criterioUtilizado = true;
        }
        if (filtro.esBorrador) {
            consulta = consulta.andWhere('documento.esBorrador = :esBorrador', {
                esBorrador: filtro.esBorrador.valueOf(),
            });
            criterioUtilizado = true;
        }
        if (filtro.estaImpreso) {
            consulta = consulta.andWhere('documento.estaImpreso = :estaImpreso', {
                estaImpreso: filtro.estaImpreso.valueOf(),
            });
            criterioUtilizado = true;
        }
        if (obligatorio) {
            return criterioUtilizado ? consulta : null;
        }
        else {
            return consulta;
        }
    }
    async obtenerPorId(id) {
        let consulta = this.repositorio
            .createQueryBuilder('documento')
            .leftJoinAndSelect('documento.hojaRuta', 'hojaRuta')
            .leftJoinAndSelect('documento.tipoDocumento', 'tipoDocumento')
            .leftJoinAndSelect('documento.clasificacion', 'clasificacion')
            .leftJoinAndSelect('documento.listaParticipante', 'participante')
            .andWhere('documento.id = :id', { id });
        consulta = consulta.orderBy('documento.id', 'DESC');
        const respuesta = await consulta.getOne();
        return respuesta
            ? this.mapper.map(respuesta, orm_1.DocumentoEntity, entidades_1.Documento)
            : null;
    }
    async obtenerObjetoPor(filtro, ordenarPor = 'id', orden = 'DESC') {
        if (!filtro) {
            return null;
        }
        let consulta = this.repositorio
            .createQueryBuilder('documento')
            .leftJoinAndSelect('documento.hojaRuta', 'hojaRuta')
            .leftJoinAndSelect('documento.tipoDocumento', 'tipoDocumento')
            .leftJoinAndSelect('documento.clasificacion', 'clasificacion')
            .leftJoinAndSelect('documento.listaParticipante', 'participante');
        consulta = this.evaluarCriterios(consulta, filtro, false, true);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`documento.${ordenarPor}`, orden);
        const respuesta = await consulta.getOne();
        return respuesta
            ? this.mapper.map(respuesta, orm_1.DocumentoEntity, entidades_1.Documento)
            : null;
    }
    async obtenerPor(filtro, pagina, cantidad, ordenarPor = 'id', orden = 'DESC') {
        let consulta = this.repositorio
            .createQueryBuilder('documento')
            .leftJoinAndSelect('documento.hojaRuta', 'hojaRuta')
            .leftJoinAndSelect('documento.tipoDocumento', 'tipoDocumento')
            .leftJoinAndSelect('documento.clasificacion', 'clasificacion')
            .leftJoinAndSelect('documento.listaParticipante', 'participante');
        consulta = this.evaluarCriterios(consulta, filtro, true, false);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`documento.${ordenarPor}`, orden);
        consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
        const respuesta = await consulta.getManyAndCount();
        return new modelos_1.ListaPaginada(this.mapper.mapArray(respuesta[0], orm_1.DocumentoEntity, entidades_1.Documento), respuesta[1]);
    }
    async guardar(objeto, transaccion) {
        const objetoEntity = await this.repositorio.create(objeto);
        return await transaccion.manager
            .save(objetoEntity, { transaction: false })
            .then((objeto) => objeto.id)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(DocumentoRepository_1.name, error);
            return 0;
        });
    }
    async modificar(id, objeto, transaccion) {
        const objetoEntity = await transaccion.manager.preload(orm_1.DocumentoEntity, Object.assign({ id }, objeto));
        return await transaccion.manager
            .update(orm_1.DocumentoEntity, { id }, objetoEntity)
            .then(() => true)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(DocumentoRepository_1.name, error);
            return false;
        });
    }
    async eliminar(id, transaccion, borradoFisico = false) {
        if (borradoFisico) {
            return await transaccion.manager
                .delete(orm_1.DocumentoEntity, { id })
                .then(() => true)
                .catch((error) => {
                __1.RepositorioFactory.registrarError(DocumentoRepository_1.name, error);
                return false;
            });
        }
        else {
            const objetoEntity = await transaccion.manager.preload(orm_1.DocumentoEntity, {
                id,
            });
            transaccion.data = { action: 'soft-remove' };
            return await transaccion.manager
                .update(orm_1.DocumentoEntity, { id }, objetoEntity)
                .then(() => true)
                .catch((error) => {
                __1.RepositorioFactory.registrarError(DocumentoRepository_1.name, error);
                return false;
            });
        }
    }
    async obtenerCorrelativo(tipoDocumentoId, gestion) {
        const consulta = await this.repositorio
            .createQueryBuilder('documento')
            .select('MAX(documento.numero)', 'maximo')
            .where('documento.tipoDocumentoId = :tipoDocumentoId', {
            tipoDocumentoId,
        })
            .andWhere('documento.gestion = :gestion', { gestion })
            .getRawOne();
        return consulta.maximo ? consulta.maximo + 1 : 1;
    }
};
DocumentoRepository = DocumentoRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_2.EntityRepository)(orm_1.DocumentoEntity),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_2.Connection, Object])
], DocumentoRepository);
exports.DocumentoRepository = DocumentoRepository;
exports.DOCUMENTO_REPOSITORIO_PROVIDER = {
    provide: (0, typeorm_1.getRepositoryToken)(entidades_1.Documento),
    useClass: DocumentoRepository,
};
//# sourceMappingURL=documento.repository.js.map