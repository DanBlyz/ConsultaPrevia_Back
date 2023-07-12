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
var AdjuntoRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADJUNTO_REPOSITORIO_PROVIDER = exports.AdjuntoRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_1 = require("@automapper/nestjs");
const modelos_1 = require("../../../../../comun/modelos");
const orm_1 = require("../orm");
const entidades_1 = require("../../../../dominio/entidades");
const __1 = require("../..");
let AdjuntoRepository = AdjuntoRepository_1 = class AdjuntoRepository {
    constructor(conexion, mapper) {
        this.conexion = conexion;
        this.mapper = mapper;
        this.repositorio = this.conexion.getRepository(orm_1.AdjuntoEntity);
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
        if (filtro.tipo && filtro.tipo !== '') {
            consulta = consulta.andWhere('adjunto.tipo ILIKE :tipo', {
                tipo: `%${filtro.tipo}%`,
            });
            criterioUtilizado = true;
        }
        if (filtro.codigo && filtro.codigo !== '') {
            consulta = consulta.andWhere('adjunto.codigo ILIKE :codigo', {
                codigo: `%${filtro.codigo}%`,
            });
            criterioUtilizado = true;
        }
        if (filtro.tipoMime && filtro.tipoMime !== '') {
            consulta = consulta.andWhere('adjunto.tipoMime ILIKE :tipoMime', {
                tipoMime: `%${filtro.tipoMime}%`,
            });
            criterioUtilizado = true;
        }
        if (filtro.tamanio && filtro.tamanio !== 0) {
            consulta = consulta.andWhere('adjunto.tamanio = :tamanio', {
                tamanio: filtro.tamanio,
            });
            criterioUtilizado = true;
        }
        if (filtro.extension && filtro.extension !== '') {
            consulta = consulta.andWhere('adjunto.extension = :extension', {
                extension: filtro.extension,
            });
            criterioUtilizado = true;
        }
        if (filtro.estaFirmado) {
            consulta = consulta.andWhere('adjunto.estaFirmado = :estaFirmado', {
                estaFirmado: filtro.estaFirmado,
            });
            criterioUtilizado = true;
        }
        if (filtro.nomPublico && filtro.nomPublico !== '') {
            consulta = consulta.andWhere('adjunto.nomPublico ILIKE :nomPublico', {
                nomPublico: `%${filtro.nomPublico}%`,
            });
            criterioUtilizado = true;
        }
        if (filtro.nomPrivado && filtro.nomPrivado !== '') {
            consulta = consulta.andWhere('adjunto.nomPrivado ILIKE :nomPrivado', {
                nomPrivado: `%${filtro.nomPrivado}%`,
            });
            criterioUtilizado = true;
        }
        if (filtro.estado && filtro.estado !== '') {
            consulta = consulta.andWhere('adjunto.estado ILIKE :estado', {
                estado: `%${filtro.estado}%`,
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
            .createQueryBuilder('adjunto')
            .andWhere('adjunto.id = :id', { id });
        consulta = consulta.orderBy('adjunto.id', 'DESC');
        const respuesta = await consulta.getOne();
        return respuesta
            ? this.mapper.map(respuesta, orm_1.AdjuntoEntity, entidades_1.Adjunto)
            : null;
    }
    async obtenerObjetoPor(filtro, ordenarPor = 'id', orden = 'DESC') {
        if (!filtro) {
            return null;
        }
        let consulta = this.repositorio.createQueryBuilder('adjunto');
        consulta = this.evaluarCriterios(consulta, filtro, false, true);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`adjunto.${ordenarPor}`, orden);
        const respuesta = await consulta.getOne();
        return respuesta
            ? this.mapper.map(respuesta, orm_1.AdjuntoEntity, entidades_1.Adjunto)
            : null;
    }
    async obtenerPor(filtro, pagina, cantidad, ordenarPor = 'id', orden = 'DESC') {
        let consulta = this.repositorio.createQueryBuilder('adjunto');
        consulta = this.evaluarCriterios(consulta, filtro, true, false);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`adjunto.${ordenarPor}`, orden);
        consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
        const respuesta = await consulta.getManyAndCount();
        return new modelos_1.ListaPaginada(this.mapper.mapArray(respuesta[0], orm_1.AdjuntoEntity, entidades_1.Adjunto), respuesta[1]);
    }
    async guardar(objeto, transaccion) {
        const objetoEntity = await this.repositorio.create(objeto);
        return await transaccion.manager
            .save(objetoEntity, { transaction: false })
            .then((objeto) => objeto.id)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(AdjuntoRepository_1.name, error);
            return 0;
        });
    }
    async modificar(id, objeto, transaccion) {
        const objetoEntity = await transaccion.manager.preload(orm_1.AdjuntoEntity, Object.assign({ id }, objeto));
        return await transaccion.manager
            .update(orm_1.AdjuntoEntity, { id }, objetoEntity)
            .then(() => true)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(AdjuntoRepository_1.name, error);
            return false;
        });
    }
    async eliminar(id, transaccion, borradoFisico = false) {
        if (borradoFisico) {
            return await transaccion.manager
                .delete(orm_1.AdjuntoEntity, { id })
                .then(() => true)
                .catch((error) => {
                __1.RepositorioFactory.registrarError(AdjuntoRepository_1.name, error);
                return false;
            });
        }
        else {
            const objetoEntity = await transaccion.manager.preload(orm_1.AdjuntoEntity, {
                id,
            });
            transaccion.data = { action: 'soft-remove' };
            return await transaccion.manager
                .update(orm_1.AdjuntoEntity, { id }, objetoEntity)
                .then(() => true)
                .catch((error) => {
                __1.RepositorioFactory.registrarError(AdjuntoRepository_1.name, error);
                return false;
            });
        }
    }
};
AdjuntoRepository = AdjuntoRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_2.EntityRepository)(orm_1.AdjuntoEntity),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_2.Connection, Object])
], AdjuntoRepository);
exports.AdjuntoRepository = AdjuntoRepository;
exports.ADJUNTO_REPOSITORIO_PROVIDER = {
    provide: (0, typeorm_1.getRepositoryToken)(entidades_1.Adjunto),
    useClass: AdjuntoRepository,
};
//# sourceMappingURL=adjunto.repository.js.map