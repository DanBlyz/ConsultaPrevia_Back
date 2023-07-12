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
var SeguimientoRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEGUIMIENTO_REPOSITORIO_PROVIDER = exports.SeguimientoRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_1 = require("@automapper/nestjs");
const modelos_1 = require("../../../../../comun/modelos");
const orm_1 = require("../orm");
const entidades_1 = require("../../../../dominio/entidades");
const __1 = require("../..");
let SeguimientoRepository = SeguimientoRepository_1 = class SeguimientoRepository {
    constructor(conexion, mapper) {
        this.conexion = conexion;
        this.mapper = mapper;
        this.repositorio = this.conexion.getRepository(orm_1.SeguimientoEntity);
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
        if (filtro.accion && filtro.accion !== '') {
            consulta = consulta.andWhere('seguimiento.accion ILIKE :accion', {
                accion: `%${filtro.accion}%`,
            });
            criterioUtilizado = true;
        }
        if (filtro.proveidoAccion && filtro.proveidoAccion !== '') {
            consulta = consulta.andWhere('seguimiento.proveidoAccion ILIKE :proveidoAccion', {
                proveidoAccion: `%${filtro.proveidoAccion}%`,
            });
            criterioUtilizado = true;
        }
        if (filtro.proveido && filtro.proveido !== '') {
            consulta = consulta.andWhere('seguimiento.proveido = :proveido', {
                proveido: filtro.proveido,
            });
            criterioUtilizado = true;
        }
        if (filtro.viaAprobada) {
            consulta = consulta.andWhere('seguimiento.viaAprobada = :viaAprobada', {
                viaAprobada: filtro.viaAprobada,
            });
            criterioUtilizado = true;
        }
        if (filtro.observacion && filtro.observacion !== '') {
            consulta = consulta.andWhere('seguimiento.observacion = :observacion', {
                observacion: filtro.observacion,
            });
            criterioUtilizado = true;
        }
        if (filtro.esBorrador) {
            consulta = consulta.andWhere('seguimiento.esBorrador = :esBorrador', {
                esBorrador: filtro.esBorrador,
            });
            criterioUtilizado = true;
        }
        if (filtro.estado && filtro.estado !== '') {
            consulta = consulta.andWhere('seguimiento.estado = :estado', {
                estado: filtro.estado,
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
            .createQueryBuilder('seguimiento')
            .andWhere('seguimiento.id = :id', { id });
        consulta = consulta.orderBy('seguimiento.id', 'DESC');
        const respuesta = await consulta.getOne();
        return respuesta
            ? this.mapper.map(respuesta, orm_1.SeguimientoEntity, entidades_1.Seguimiento)
            : null;
    }
    async obtenerObjetoPor(filtro, ordenarPor = 'id', orden = 'DESC') {
        if (!filtro) {
            return null;
        }
        let consulta = this.repositorio.createQueryBuilder('seguimiento');
        consulta = this.evaluarCriterios(consulta, filtro, false, true);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`seguimiento.${ordenarPor}`, orden);
        const respuesta = await consulta.getOne();
        return respuesta
            ? this.mapper.map(respuesta, orm_1.SeguimientoEntity, entidades_1.Seguimiento)
            : null;
    }
    async obtenerPor(filtro, pagina, cantidad, ordenarPor = 'id', orden = 'DESC') {
        let consulta = this.repositorio.createQueryBuilder('seguimiento');
        consulta = this.evaluarCriterios(consulta, filtro, true, false);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`seguimiento.${ordenarPor}`, orden);
        consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
        const respuesta = await consulta.getManyAndCount();
        return new modelos_1.ListaPaginada(this.mapper.mapArray(respuesta[0], orm_1.SeguimientoEntity, entidades_1.Seguimiento), respuesta[1]);
    }
    async guardar(objeto, transaccion) {
        const objetoEntity = await this.repositorio.create(objeto);
        return await transaccion.manager
            .save(objetoEntity, { transaction: false })
            .then((objeto) => objeto.id)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(SeguimientoRepository_1.name, error);
            return 0;
        });
    }
    async modificar(id, objeto, transaccion) {
        const objetoEntity = await transaccion.manager.preload(orm_1.SeguimientoEntity, Object.assign({ id }, objeto));
        return await transaccion.manager
            .update(orm_1.SeguimientoEntity, { id }, objetoEntity)
            .then(() => true)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(SeguimientoRepository_1.name, error);
            return false;
        });
    }
    async eliminar(id, transaccion, borradoFisico = false) {
        if (borradoFisico) {
            return await transaccion.manager
                .delete(orm_1.SeguimientoEntity, { id })
                .then(() => true)
                .catch((error) => {
                __1.RepositorioFactory.registrarError(SeguimientoRepository_1.name, error);
                return false;
            });
        }
        else {
            const objetoEntity = await transaccion.manager.preload(orm_1.SeguimientoEntity, { id });
            transaccion.data = { action: 'soft-remove' };
            return await transaccion.manager
                .update(orm_1.SeguimientoEntity, { id }, objetoEntity)
                .then(() => true)
                .catch((error) => {
                __1.RepositorioFactory.registrarError(SeguimientoRepository_1.name, error);
                return false;
            });
        }
    }
};
SeguimientoRepository = SeguimientoRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_2.EntityRepository)(orm_1.SeguimientoEntity),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_2.Connection, Object])
], SeguimientoRepository);
exports.SeguimientoRepository = SeguimientoRepository;
exports.SEGUIMIENTO_REPOSITORIO_PROVIDER = {
    provide: (0, typeorm_1.getRepositoryToken)(entidades_1.Seguimiento),
    useClass: SeguimientoRepository,
};
//# sourceMappingURL=seguimiento.repository.js.map