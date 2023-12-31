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
var RolCuentaRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROL_CUENTA_REPOSITORIO_PROVIDER = exports.RolCuentaRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_1 = require("@automapper/nestjs");
const modelos_1 = require("../../../../../comun/modelos");
const orm_1 = require("../orm");
const entidades_1 = require("../../../../dominio/entidades");
const __1 = require("../..");
let RolCuentaRepository = exports.RolCuentaRepository = RolCuentaRepository_1 = class RolCuentaRepository {
    constructor(conexion, mapper) {
        this.conexion = conexion;
        this.mapper = mapper;
        this.repositorio = this.conexion.getRepository(orm_1.RolCuentaEntity);
    }
    evaluarCriterios(consulta, objeto, nulo, obligatorio) {
        if (!objeto) {
            if (nulo) {
                return consulta;
            }
            else {
                return null;
            }
        }
        let criterioUtilizado = false;
        if (objeto.rolId && objeto.rolId > 0) {
            consulta = consulta.andWhere('rolCuenta.rolId = :rolId', {
                rolId: objeto.rolId,
            });
            criterioUtilizado = true;
        }
        if (objeto.cuentaId && objeto.cuentaId > 0) {
            consulta = consulta.andWhere('rolCuenta.cuentaId = :cuentaId', {
                cuentaId: objeto.cuentaId,
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
    async obtenerPorCuentaId(cuentaId) {
        let consulta = this.repositorio
            .createQueryBuilder('rolCuenta')
            .leftJoinAndSelect('rolCuenta.rol', 'rol')
            .leftJoinAndSelect('rol.grupo', 'grupo')
            .leftJoinAndSelect('rolCuenta.cuenta', 'cuenta')
            .where('rolCuenta.cuentaId = :cuentaId', { cuentaId });
        consulta = consulta.orderBy('rolCuenta.id', 'DESC');
        const respuesta = await consulta.getMany();
        return this.mapper.mapArray(respuesta, orm_1.RolCuentaEntity, entidades_1.RolCuenta);
    }
    async obtenerPorGrupo(grupoCodigo, cuentaId) {
        let consulta = this.repositorio
            .createQueryBuilder('rolCuenta')
            .leftJoinAndSelect('rolCuenta.rol', 'rol')
            .leftJoinAndSelect('rol.grupo', 'grupo')
            .leftJoinAndSelect('rolCuenta.cuenta', 'cuenta')
            .where('rolCuenta.cuentaId = :cuentaId', { cuentaId })
            .andWhere('grupo.codigo IN (:...grupoCodigo)', { grupoCodigo });
        consulta = consulta.orderBy('rolCuenta.id', 'DESC');
        const respuesta = await consulta.getMany();
        return this.mapper.mapArray(respuesta, orm_1.RolCuentaEntity, entidades_1.RolCuenta);
    }
    async obtenerPorId(id) {
        let consulta = this.repositorio
            .createQueryBuilder('rolCuenta')
            .leftJoinAndSelect('rolCuenta.rol', 'rol')
            .leftJoinAndSelect('rol.grupo', 'grupo')
            .leftJoinAndSelect('rolCuenta.cuenta', 'cuenta')
            .where('rolCuenta.id = :id', { id });
        consulta = consulta.orderBy('rolCuenta.id', 'DESC');
        const respuesta = await consulta.getOne();
        return respuesta
            ? this.mapper.map(respuesta, orm_1.RolCuentaEntity, entidades_1.RolCuenta)
            : null;
    }
    async obtenerObjetoPor(objeto, ordenarPor = 'id', orden = 'DESC') {
        let consulta = this.repositorio.createQueryBuilder('rolCuenta');
        consulta = this.evaluarCriterios(consulta, objeto, false, true);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`rolCuenta.${ordenarPor}`, orden);
        const respuesta = await consulta.getOne();
        return respuesta
            ? this.mapper.map(respuesta, orm_1.RolCuentaEntity, entidades_1.RolCuenta)
            : null;
    }
    async obtenerPor(objeto, pagina, cantidad, ordenarPor = 'id', orden = 'DESC') {
        let consulta = this.repositorio.createQueryBuilder('rolCuenta');
        consulta = this.evaluarCriterios(consulta, objeto, true, false);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`rolCuenta.${ordenarPor}`, orden);
        consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
        const respuesta = await consulta.getManyAndCount();
        return new modelos_1.ListaPaginada(this.mapper.mapArray(respuesta[0], orm_1.RolCuentaEntity, entidades_1.RolCuenta), respuesta[1]);
    }
    async guardar(objeto, transaccion) {
        const objetoEntity = await this.repositorio.create(objeto);
        return await transaccion.manager
            .save(objetoEntity, { transaction: false })
            .then((objeto) => objeto.id)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(RolCuentaRepository_1.name, error);
            return 0;
        });
    }
    async modificar(id, objeto, transaccion) {
        const objetoEntity = await transaccion.manager.preload(orm_1.RolCuentaEntity, Object.assign({ id }, objeto));
        return await transaccion.manager
            .update(orm_1.RolCuentaEntity, { id }, objetoEntity)
            .then(() => true)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(RolCuentaRepository_1.name, error);
            return false;
        });
    }
    async eliminar(id, transaccion, borradoFisico = false) {
        if (borradoFisico) {
            return await transaccion.manager
                .delete(orm_1.RolCuentaEntity, { id })
                .then(() => true)
                .catch((error) => {
                __1.RepositorioFactory.registrarError(RolCuentaRepository_1.name, error);
                return false;
            });
        }
        else {
            const objetoEntity = await transaccion.manager.preload(orm_1.RolCuentaEntity, {
                id,
            });
            transaccion.data = { action: 'soft-remove' };
            return await transaccion.manager
                .update(orm_1.RolCuentaEntity, { id }, objetoEntity)
                .then(() => true)
                .catch((error) => {
                __1.RepositorioFactory.registrarError(RolCuentaRepository_1.name, error);
                return false;
            });
        }
    }
};
exports.RolCuentaRepository = RolCuentaRepository = RolCuentaRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_2.EntityRepository)(orm_1.RolCuentaEntity),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_2.Connection, Object])
], RolCuentaRepository);
exports.ROL_CUENTA_REPOSITORIO_PROVIDER = {
    provide: (0, typeorm_1.getRepositoryToken)(entidades_1.RolCuenta),
    useClass: RolCuentaRepository,
};
//# sourceMappingURL=rol-cuenta.repository.js.map